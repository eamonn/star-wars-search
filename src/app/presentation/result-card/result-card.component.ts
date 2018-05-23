import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'em-result-card',
  templateUrl: './result-card.component.html',
  styleUrls: ['./result-card.component.scss']
})
export class ResultCardComponent implements OnInit {

  @Input() public name: string = '';
  @Input() public type: string = '';

  public get wookieUrl(): string {
    return `http://starwars.wikia.com/wiki/${this.name}`;
  }

  constructor() { }

  ngOnInit() {
  }

}
