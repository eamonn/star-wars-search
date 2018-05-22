import { createFeatureSelector, createSelector, Selector } from '@ngrx/store';
import { IStoreState } from '../reducers';
import { ISearchQueryState } from './search-query.reducer';

export const selectSearchQuery = createFeatureSelector<ISearchQueryState>('searchQuery');

export const selectSearchQueryText: Selector<IStoreState, string> = createSelector(
  selectSearchQuery,
  (state: ISearchQueryState) => state.queryText
);
