import { Action } from '@ngrx/store';

export const UPDATE_SEARCH_RESULTS_FOR_ENTITY = '[Search Results] Update Results for Entity';
export const LOAD_RESULTS_FOR_TERM =            '[Search Query] Load Results for Search Term';

export class UpdateSearchResultsForEntityAction implements Action {
  public readonly type = UPDATE_SEARCH_RESULTS_FOR_ENTITY;
  constructor(
    public entity: string,
    public results: Array<{}>
  ) {}
}

export class LoadResultsForTermAction implements Action {
  public readonly type = LOAD_RESULTS_FOR_TERM;
  constructor(public searchTerm: string) {}
}

export type Actions
  = UpdateSearchResultsForEntityAction
  | LoadResultsForTermAction;
