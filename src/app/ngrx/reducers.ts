import { appErrorsReducer, IAppErrorsState } from './app-errors/app-errors.reducer';
import { ISearchQueryState, searchQueryReducer } from './search-query/search-query.reducer';
import { ISearchResultsState, searchResultsReducer } from './search-results/search-results.reducer';

export interface IStoreState {
  searchQuery: ISearchQueryState;
  searchResults: ISearchResultsState;
  appErrors: IAppErrorsState;
}

export const reducers = {
  searchQuery: searchQueryReducer,
  searchResults: searchResultsReducer,
  appErrors: appErrorsReducer
};
