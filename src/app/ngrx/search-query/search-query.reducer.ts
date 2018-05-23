import update from 'immutability-helper';
import * as SearchQuery from './search-query.actions';

export interface ISearchQueryState {
  queryText: string;
}

const initialState: ISearchQueryState = {
  queryText: ''
};

export function searchQueryReducer(state: ISearchQueryState = initialState, action: SearchQuery.Actions): ISearchQueryState {

  switch (action.type) {

    case SearchQuery.UPDATE_SEARCH_QUERY: {
      return update(state, {
        queryText: { $set: action.searchTerm }
      });
    }
  }

  return state;
}
