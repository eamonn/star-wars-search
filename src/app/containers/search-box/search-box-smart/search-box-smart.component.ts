import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';
import { IStoreState } from '../../../ngrx/reducers';
import { UpdateSearchQueryAction } from '../../../ngrx/search-query/search-query.actions';
import 'rxjs-compat/add/operator/takeUntil';
import * as SearchQuerySelectors from '../../../ngrx/search-query/search-query.selectors';

@Component({
  selector: 'em-search-box-smart',
  templateUrl: './search-box-smart.component.html',
  styleUrls: ['./search-box-smart.component.scss']
})
export class SearchBoxSmartComponent {

  public searchTerm: Observable<string>;

  constructor(
    public store: Store<IStoreState>
  ) {
    this.searchTerm = this.store.pipe(select(SearchQuerySelectors.selectSearchQueryText));
  }

  public updateSearchQuery(str: string): void {
    this.store.dispatch(new UpdateSearchQueryAction(str));
  }

}
