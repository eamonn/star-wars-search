import update from 'immutability-helper';
import {
  IStarWarsFilm,
  IStarWarsPerson,
  IStarWarsPlanet,
  IStarWarsSpecies, IStarWarsStarship, IStarWarsVehicle,
} from '../../api/star-wars-http.interface';
import * as SearchResults from './search-results.actions';
import * as SearchQuery from '../search-query/search-query.actions';

export interface ISearchResultsState {
  results: {
    films: Array<IStarWarsFilm>;
    people: Array<IStarWarsPerson>;
    planets: Array<IStarWarsPlanet>;
    species: Array<IStarWarsSpecies>;
    vehicles: Array<IStarWarsVehicle>;
    starships: Array<IStarWarsStarship>;
  };
  callsIn: number;
  activeSearch: boolean;
}

// In most cases object arrays would not be kept in the store. As it is risky to update an object by array index due to async implications.
// I would usually store the array items by id in key value form then, store an array of the id's if the order is required
// In this case that is not necessary as I am only doing full replaces of the arrays, not modifying their contents.
export const initialState: ISearchResultsState = {
  results: {
    films: [],
    people: [],
    planets: [],
    species: [],
    vehicles: [],
    starships: []
  },
  callsIn: 0,
  activeSearch: false
};

export function searchResultsReducer(
  state: ISearchResultsState = initialState,
  action: SearchResults.Actions | SearchQuery.Actions): ISearchResultsState {

  switch (action.type) {

    case SearchResults.UPDATE_SEARCH_RESULTS_FOR_ENTITY: {
      return update(state, {
        results: {
          [action.entity]: { $set: action.results }
        },
        callsIn: { $set: state.callsIn + 1 }
      });
    }

    case SearchQuery.UPDATE_SEARCH_QUERY: {
      return update(state, { $set: {
          results: {
            films: [],
            people: [],
            species: [],
            planets: [],
            vehicles: [],
            starships: []
          },
          callsIn: 0,
          activeSearch: false
        }
      });
    }

    case SearchResults.LOAD_RESULTS_FOR_TERM: {
      return update(state, {
        activeSearch: { $set: true }
      });
    }
  }

  return state;
}
