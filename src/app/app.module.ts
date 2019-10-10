import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './feature-modules/home/home.module';
import { ExperienceModule } from './feature-modules/experience/experience.module';
import { ContactModule } from './feature-modules/contact/contact.module';
import { CoreModule } from './core/core.module';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { PortfolioModule } from './feature-modules/portfolio/portfolio.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    ExperienceModule,
    ContactModule,
    CoreModule,
    NgbModule,
    PortfolioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
