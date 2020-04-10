import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './portfolio.component';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [PortfolioComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatChipsModule,
    MatButtonModule
  ],
  exports: [PortfolioComponent]
})
export class PortfolioModule { }
