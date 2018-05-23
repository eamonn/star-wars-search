import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultsModule } from './results/results.module';
import { SearchBoxModule } from './search-box/search-box.module';

@NgModule({
  imports: [
    CommonModule,
    SearchBoxModule,
    ResultsModule
  ],
  declarations: [],
  exports: [
    SearchBoxModule,
    ResultsModule
  ]
})
export class ContainersModule { }
