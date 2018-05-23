import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { mergeMap } from 'rxjs/operators';
import { LoadResultsForTermAction } from '../search-results/search-results.actions';
import { QueryTooShortAction, UPDATE_SEARCH_QUERY, UpdateSearchQueryAction } from './search-query.actions';

@Injectable()
export class SearchQueryEffects {

  @Effect()
  clearResults$: Observable<LoadResultsForTermAction|QueryTooShortAction> = this.actions$
    .pipe(
      ofType(UPDATE_SEARCH_QUERY),
      mergeMap((action: UpdateSearchQueryAction) => {
        if (!action.searchTerm || action.searchTerm.length < 2) {
          return Observable.of(new QueryTooShortAction());
        }
        return Observable.of(new LoadResultsForTermAction(action.searchTerm));
      })
    );

  constructor(
    private actions$: Actions
  ) {}
}
