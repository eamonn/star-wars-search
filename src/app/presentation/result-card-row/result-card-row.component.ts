import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'em-result-card-row',
  templateUrl: './result-card-row.component.html',
  styleUrls: ['./result-card-row.component.scss']
})
export class ResultCardRowComponent implements OnInit {

  @Input() public property: string = '';

  constructor() { }

  ngOnInit() {
  }

}
