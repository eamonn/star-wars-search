import { Action } from '@ngrx/store';

export const UPDATE_SEARCH_QUERY = '[Search Query] Update Query Text';
export const QUERY_TOO_SHORT =     '[Search Query] Query too short to search';

export class UpdateSearchQueryAction implements Action {
  public readonly type = UPDATE_SEARCH_QUERY;
  constructor(public searchTerm: string) {}
}

export class QueryTooShortAction implements Action {
  public readonly type = QUERY_TOO_SHORT;
}

export type Actions
  = UpdateSearchQueryAction;


// Selector Test
// Smart Component Test
// Dumb Component Test
