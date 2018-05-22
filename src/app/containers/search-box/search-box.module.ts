import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchBoxSmartComponent } from './search-box-smart/search-box-smart.component';
import { SearchBoxDumbComponent } from './search-box-dumb/search-box-dumb.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    SearchBoxSmartComponent,
    SearchBoxDumbComponent
  ],
  exports: [
    SearchBoxSmartComponent
  ]
})
export class SearchBoxModule { }
