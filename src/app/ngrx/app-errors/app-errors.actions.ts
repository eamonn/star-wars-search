import { Action } from '@ngrx/store';

export const APP_ERROR = '[Errors] Error';

export class AppErrorAction implements Action {
  public readonly type = APP_ERROR;
  constructor(
    public message: string,
  ) {}
}

export type Actions
  = AppErrorAction;
