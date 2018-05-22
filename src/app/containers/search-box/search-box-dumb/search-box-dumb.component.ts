import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Component({
  selector: 'em-search-box-dumb',
  templateUrl: './search-box-dumb.component.html',
  styleUrls: ['./search-box-dumb.component.scss']
})
export class SearchBoxDumbComponent implements OnInit {

  @Input() public searchTerm: Observable<string>;

  @Output() public searchTermChange: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  public changeSearchText(newTerm: string): void {
    this.searchTermChange.emit(newTerm);
  }

}
