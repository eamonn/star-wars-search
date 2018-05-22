import * as SearchQuery from './search-query.actions';

export interface ISearchQueryState {
  queryText: string;
}

const initialState: ISearchQueryState = {
  queryText: ''
};

export function searchQueryReducer(state: ISearchQueryState = initialState, action: SearchQuery.Actions): ISearchQueryState {
  // @todo change this to using a Immutable Update Utility Library
  // https://redux.js.org/recipes/structuring-reducers/immutable-update-patterns#immutable-update-utility-libraries

  const newState: ISearchQueryState = {
    ...state,
  };

  switch (action.type) {

    case SearchQuery.UPDATE_SEARCH_QUERY: {
      newState.queryText = action.searchTerm;
      break;
    }
  }

  return newState;
}
