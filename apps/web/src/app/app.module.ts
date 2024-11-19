import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { CardComponent } from './card/card/card.component';
import { WhyGroomCatsComponent } from './why-groom-cats/why-groom-cats/why-groom-cats.component';
import { CustomGroomingExperienceComponent } from './custom-grooming-experience/custom-grooming-experience/custom-grooming-experience.component';
// import { NgxDynamicHeadingsModule } from 'ngx-dynamic-headings';
// import { NgxDynamicHeadingsModule } from '../../../../libs/ngx-dynamic-headings/src/index';
import { NgxDynamicHeadingsModule } from '@ngx-dynamic-headings';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    WhyGroomCatsComponent,
    CustomGroomingExperienceComponent,
  ],
  imports: [
    BrowserModule,
    NgxDynamicHeadingsModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
