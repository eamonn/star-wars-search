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
import { ISearchResultsState } from './search-results.reducer';

export const selectSearchResults = createFeatureSelector<ISearchResultsState>('searchResults');

export const selectResultsForEntity = <T>(starWarsEntity: StarWarsEntities): Selector<IStoreState, Array<T>> => createSelector(
  selectSearchResults,
  (state: ISearchResultsState) => state.results[starWarsEntity]
);
