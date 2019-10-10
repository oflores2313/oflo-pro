import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactComponent } from './feature-modules/contact/contact.component';
import { ExperienceComponent } from './feature-modules/experience/experience.component';
import { HomeComponent } from './feature-modules/home/home.component';
import { PortfolioComponent } from './feature-modules/portfolio/portfolio.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'experience',
    component: ExperienceComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'portfolio',
    component: PortfolioComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
