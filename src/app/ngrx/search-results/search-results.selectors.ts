import { createFeatureSelector, createSelector, Selector } from '@ngrx/store';
import { StarWarsEntities } from '../../api/star-wars-http.interface';
import { IStoreState } from '../reducers';
import { ISearchResultsState } from './search-results.reducer';

export const selectSearchResults = createFeatureSelector<ISearchResultsState>('searchResults');

// Selector Factory Function
export const selectResultsForEntity = <T>(starWarsEntity: StarWarsEntities): Selector<IStoreState, T> => createSelector(
  selectSearchResults,
  (state: ISearchResultsState): any => state.results[starWarsEntity]
);

export const selectSearchIsActive: Selector<IStoreState, boolean> = createSelector(
  selectSearchResults,
  (state: ISearchResultsState) => state.activeSearch
);

export const showLoadingSpinner: Selector<IStoreState, boolean> = createSelector(
  selectSearchResults,
  selectSearchIsActive,
  (state: ISearchResultsState, isActive: boolean) => isActive && state.callsIn < 6
);

