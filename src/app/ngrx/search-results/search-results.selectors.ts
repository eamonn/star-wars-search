import { createFeatureSelector, createSelector, Selector } from '@ngrx/store';
import {
  IStarWarsFilm,
  IStarWarsPerson,
  IStarWarsPlanet,
  IStarWarsSpecies,
  IStarWarsStarship,
  IStarWarsVehicle, StarWarsEntities
} from '../../api/star-wars-http.interface';
import { IStoreState } from '../reducers';
import { ISearchQueryState } from '../search-query/search-query.reducer';
import { selectSearchQuery } from '../search-query/search-query.selectors';
import { ISearchResultsState } from './search-results.reducer';

export const selectSearchResults = createFeatureSelector<ISearchResultsState>('searchResults');

export const selectResultsForEntity = <T>(starWarsEntity: StarWarsEntities): Selector<IStoreState, Array<T>> => createSelector(
  selectSearchResults,
  (state: ISearchResultsState) => state.results[starWarsEntity]
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

