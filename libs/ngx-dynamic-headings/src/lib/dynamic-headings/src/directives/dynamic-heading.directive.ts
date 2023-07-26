import { Directive, ElementRef, AfterContentInit } from '@angular/core';
import { extractNumberFromString, getSortedHeadings } from '../utils/utils';

@Directive({
  selector: 'h',
})
export class DynamicHeadingDirective implements AfterContentInit {
  resolvedHeadingLevel = 'h1';
  headingText = '';

  constructor(public elementRef: ElementRef<HTMLUnknownElement>) {}

  ngAfterContentInit() {
    this.headingText = this.elementRef.nativeElement.textContent as string;
    const headings = getSortedHeadings();
    if (headings.length === 0) {
      this.resolvedHeadingLevel = 'h1';
      return this.replaceWithResolvedHeading();
    }
    const headingsParentNodes = Array.from(headings).map((h) => h.parentNode);
    let biggestHeadingLevel = extractNumberFromString(headings[0].tagName);
    for (let i = 0; i < headingsParentNodes.length; i++) {
      if (headingsParentNodes[i]?.contains(this.elementRef.nativeElement)) {
        if (biggestHeadingLevel === 6) {
          // keep heading level if h6 level is biggest heading level
          this.resolvedHeadingLevel = `h6`;
        } else if (headingsParentNodes[i] === this.elementRef.nativeElement.parentNode) {
          // keep heading level if the element shares parent with biggest heading level
          this.resolvedHeadingLevel = `h${biggestHeadingLevel}`;
        } else {
          // increase heading level if the element is descendant of node with biggest heading level
          this.resolvedHeadingLevel = `h${biggestHeadingLevel + 1}`;
        }
        return this.replaceWithResolvedHeading();
      } else {
        if (headings[i + 1]) {
          biggestHeadingLevel = extractNumberFromString(headings[i + 1].tagName);
        } else {
          return this.replaceWithResolvedHeading();
        }
      }
    }
  }

  private replaceWithResolvedHeading() {
    const resolvedHeadingElement = document.createElement(
      this.resolvedHeadingLevel
    );
    resolvedHeadingElement.innerText = this.headingText;
    this.elementRef.nativeElement.replaceWith(resolvedHeadingElement);
  }
}
