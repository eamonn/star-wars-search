import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultCardComponent } from './result-card/result-card.component';
import { ResultCardRowComponent } from './result-card-row/result-card-row.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ResultCardComponent,
    ResultCardRowComponent,
    LoadingSpinnerComponent
  ],
  exports: [
    ResultCardComponent,
    ResultCardRowComponent,
    LoadingSpinnerComponent
  ]
})
export class PresentationModule { }
