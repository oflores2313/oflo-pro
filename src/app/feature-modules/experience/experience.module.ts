import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceComponent } from './experience.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [ExperienceComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class ExperienceModule { }
