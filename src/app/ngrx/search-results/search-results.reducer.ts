import { IStarWarsPerson, StarWarsEntities } from '../../api/star-wars-http.interface';
import { UpdateSearchQueryAction } from '../search-query/search-query.actions';
import * as SearchResults from './search-results.actions';
import * as SearchQuery from '../search-query/search-query.actions';

export interface ISearchResultsState {
  results: {
    films: Array<any>;
    people: Array<IStarWarsPerson>;
    planets: Array<any>;
    species: Array<any>;
    vehicles: Array<any>;
  };
  callsIn: number;
}

// In most cases object arrays would not be kept in the store. As it is risky to update an object by array index due to async implications.
// I would usually store the array items by id in key value form then, store an array of the id's if the order is required
// In this case that is not necessary as I am only doing full replaces of the arrays, not modifying their contents.
const initialState: ISearchResultsState = {
  results: {
    films: [],
    people: [],
    planets: [],
    species: [],
    vehicles: [],
  },
  callsIn: 0,
};

export function searchResultsReducer(
  state: ISearchResultsState = initialState,
  action: SearchResults.Actions | SearchQuery.Actions): ISearchResultsState {

  // @todo making own state copy here. Should change this to using a Immutable Update Utility Library
  // https://redux.js.org/recipes/structuring-reducers/immutable-update-patterns#immutable-update-utility-libraries
  const newState: ISearchResultsState = {
    ...state,
    results: {
      films: state.results.films.map((entity: {}) => entity),
      people: state.results.people.map((entity: IStarWarsPerson) => entity),
      planets: state.results.planets.map((entity: {}) => entity),
      species: state.results.species.map((entity: {}) => entity),
      vehicles: state.results.vehicles.map((entity: {}) => entity)
    },
    callsIn: state.callsIn
  };

  switch (action.type) {

    case SearchResults.UPDATE_SEARCH_RESULTS_FOR_ENTITY: {
      // I need to map the results array, otherwise we will only get a pointer reference, not a copy.
      newState.results[action.entity] = action.results.map((entity: StarWarsEntities) => entity);
      newState.callsIn = state.callsIn + 1;
      break;
    }

    case SearchQuery.UPDATE_SEARCH_QUERY: {
      newState.results = {
        films: [],
        people: [],
        planets: [],
        species: [],
        vehicles: []
      };
      newState.callsIn = 0;
      break;
    }
  }

  return newState;
}
