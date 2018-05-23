import * as fromSearchResultsActions from './search-results.actions';
import * as fromSearchQueryActions from '../search-query/search-query.actions';
import * as fromSearchResults from './search-results.reducer';

describe('SearchResultsReducer', () => {

  describe('undefined action' , () => {

    it('should return the default state', () => {
      const { initialState } = fromSearchResults;
      const action = {};
      const state = fromSearchResults
        .searchResultsReducer(undefined, action as fromSearchResultsActions.UpdateSearchResultsForEntityAction);

      expect(state).toEqual(initialState);
    });
  });

  describe('UPDATE_SEARCH_RESULTS_FOR_ENTITY' , () => {

    it('should update films results with two films, increment callsIn count by 1.', () => {
      const mockFilms: any = [ {title: 'mock film one'}, {title: 'mock film two'}];

      const mockInitialState: fromSearchResults.ISearchResultsState = {
        results: {
          films: [],
          people: [],
          species: [],
          vehicles: [],
          starships: [],
          planets: []
        },
        callsIn: 2,
        activeSearch: true
      };

      const expectedState: fromSearchResults.ISearchResultsState = {
        results: {
          films: [...mockFilms],
          people: [],
          species: [],
          vehicles: [],
          starships: [],
          planets: []
        },
        callsIn: 3,
        activeSearch: true
      };

      const action = new fromSearchResultsActions.UpdateSearchResultsForEntityAction('films', mockFilms);
      const state = fromSearchResults
        .searchResultsReducer(mockInitialState, action);

      expect(state).toEqual(expectedState);
    });
  });

  describe('UPDATE_SEARCH_QUERY' , () => {

    it('should reset state to initial state.', () => {
      const mockFilms: any = [ {title: 'mock film one'}, {title: 'mock film two'}];

      const mockInitialState: fromSearchResults.ISearchResultsState = {
        results: {
          films: [...mockFilms],
          people: [],
          species: [],
          vehicles: [],
          starships: [],
          planets: []
        },
        callsIn: 3,
        activeSearch: true
      };

      const expectedState: fromSearchResults.ISearchResultsState = {
        results: {
          films: [],
          people: [],
          species: [],
          vehicles: [],
          starships: [],
          planets: []
        },
        callsIn: 0,
        activeSearch: false
      };

      const action = new fromSearchQueryActions.UpdateSearchQueryAction('sky');
      const state = fromSearchResults
        .searchResultsReducer(mockInitialState, action);

      expect(state).toEqual(expectedState);
    });
  });

  describe('UPDATE_SEARCH_QUERY' , () => {

    it('should reset state to initial state.', () => {
      const mockInitialState: fromSearchResults.ISearchResultsState = {
        results: {
          films: [],
          people: [],
          species: [],
          vehicles: [],
          starships: [],
          planets: []
        },
        callsIn: 0,
        activeSearch: false
      };

      const expectedState: fromSearchResults.ISearchResultsState = {
        results: {
          films: [],
          people: [],
          species: [],
          vehicles: [],
          starships: [],
          planets: []
        },
        callsIn: 0,
        activeSearch: true
      };

      const action = new fromSearchResultsActions.LoadResultsForTermAction('sky');
      const state = fromSearchResults
        .searchResultsReducer(mockInitialState, action);

      expect(state).toEqual(expectedState);
    });
  });
});
