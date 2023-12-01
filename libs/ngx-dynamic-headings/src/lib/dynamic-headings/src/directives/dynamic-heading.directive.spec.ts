import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component } from '@angular/core';
import { DynamicHeadingDirective } from './dynamic-heading.directive';

@Component({
    template: `
        <h>Test</h>
    `,
  })
  class NoHeadingComponent {}

@Component({
  template: `
    <h1>The h1 heading</h1>
    <div>
      <h>Test</h>
    </div>
  `,
})
class H1Component {}

@Component({
  template: `
    <h1>The h1 heading</h1>
    <h2>The h2 heading</h2>
    <div>
      <h>Test</h>
    </div>
  `,
})
class H2Component {}

@Component({
  template: `
    <h1>The h1 heading</h1>
    <h2>The h2 heading</h2>
    <h3>The h3 heading</h3>
    <h4>The h4 heading</h4>
    <h5>The h5 heading</h5>
    <h6>The h6 heading</h6>
    <div>
      <h>Test</h>
    </div>
  `,
})
class H6Component {}

@Component({
  template: `
    <h1>The h1 heading</h1>
    <div>
      <h>Test</h>
      <h>Test</h>
    </div>
  `,
})
class MultipleDynamicHeadingsComponent {}

describe('DynamicHeadingDirective', () => {
  
  describe('NoHeadingComponent use cases', () => {
    let component: NoHeadingComponent;
    let fixture: ComponentFixture<NoHeadingComponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [DynamicHeadingDirective, NoHeadingComponent],
      }).compileComponents();

      fixture = TestBed.createComponent(NoHeadingComponent);
      component = fixture.componentInstance;

      fixture.detectChanges();
    });

    it('should have an h1 heading in template and it should contain text "Test"', () => {
      const h1: HTMLElement = fixture.nativeElement.querySelector('h1');
      expect(h1).toBeInstanceOf(HTMLElement);
      const text = h1.innerText;
      expect(text).toBe('Test');
    });
  });
  describe('H1Component use cases', () => {
    let component: H1Component;
    let fixture: ComponentFixture<H1Component>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [DynamicHeadingDirective, H1Component],
      }).compileComponents();

      fixture = TestBed.createComponent(H1Component);
      component = fixture.componentInstance;

      fixture.detectChanges();
    });

    it('should have an h2 heading in template and it should contain text "Test"', () => {
      const h2: HTMLElement = fixture.nativeElement.querySelector('h2');
      expect(h2).toBeInstanceOf(HTMLElement);
      const text = h2.innerText;
      expect(text).toBe('Test');
    });
  });
  describe('H2Component use cases', () => {
    let component: H2Component;
    let fixture: ComponentFixture<H2Component>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [DynamicHeadingDirective, H2Component],
      }).compileComponents();

      fixture = TestBed.createComponent(H2Component);
      component = fixture.componentInstance;

      fixture.detectChanges();
    });

    it('should have an h3 heading in template and it should contain text "Test"', () => {
      const h3: HTMLElement = fixture.nativeElement.querySelector('h3');
      expect(h3).toBeInstanceOf(HTMLElement);
      const text = h3.innerText;
      expect(text).toBe('Test');
    });
  });

  describe('H6Component use cases', () => {
    let component: H6Component;
    let fixture: ComponentFixture<H6Component>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [DynamicHeadingDirective, H6Component],
      }).compileComponents();

      fixture = TestBed.createComponent(H6Component);
      component = fixture.componentInstance;

      fixture.detectChanges();
    });

    it('should have 2 h6 headings in template and the latter should contain text "Test"', () => {
      const h6: HTMLElement[] = fixture.nativeElement.querySelectorAll('h6');
      expect(h6.length).toBe(2);
      expect(h6[1]).toBeInstanceOf(HTMLElement);
      const text = h6[1].innerText;
      expect(text).toBe('Test');
    });
  });

  describe('MultipleDynamicHeadingsComponent use cases', () => {
    let component: MultipleDynamicHeadingsComponent;
    let fixture: ComponentFixture<MultipleDynamicHeadingsComponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [DynamicHeadingDirective, MultipleDynamicHeadingsComponent],
      }).compileComponents();

      fixture = TestBed.createComponent(MultipleDynamicHeadingsComponent);
      component = fixture.componentInstance;

      fixture.detectChanges();
    });

    it('should have 2 h2 headings in template and the both should contain text "Test"', () => {
      const h2: HTMLElement[] = fixture.nativeElement.querySelectorAll('h2');
      expect(h2.length).toBe(2);
      expect(h2[0]).toBeInstanceOf(HTMLElement);
      expect(h2[1]).toBeInstanceOf(HTMLElement);
      const textFirstH2 = h2[0].innerText;
      const textSecondH2 = h2[1].innerText;
      expect(textFirstH2).toBe('Test');
      expect(textSecondH2).toBe('Test');
    });
  });
});
