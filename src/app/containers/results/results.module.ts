import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PresentationModule } from '../../presentation/presentation.module';
import { ResultsSmartComponent } from './results-smart/results-smart.component';
import { ResultsDumbComponent } from './results-dumb/results-dumb.component';

@NgModule({
  imports: [
    CommonModule,
    PresentationModule
  ],
  declarations: [
    ResultsSmartComponent,
    ResultsDumbComponent
  ],
  exports: [
    ResultsSmartComponent
  ]
})
export class ResultsModule { }
