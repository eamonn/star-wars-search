import update from 'immutability-helper';
import * as AppErrors from './app-errors.actions';

export interface IAppErrorsState {
  errorMessages: Array<string>;
}

const initialState: IAppErrorsState = {
  errorMessages: []
};

export function appErrorsReducer(state: IAppErrorsState = initialState, action: AppErrors.Actions): IAppErrorsState {
  // @todo change this to using a Immutable Update Utility Library
  // https://redux.js.org/recipes/structuring-reducers/immutable-update-patterns#immutable-update-utility-libraries

  const newState: IAppErrorsState = {
    ...state,
    errorMessages: state.errorMessages.map((errorMessage: string) => errorMessage)
  };

  switch (action.type) {

    case AppErrors.APP_ERROR: {
      return update(state, {
        errorMessages: { $push: [action.message] }
      });
    }

  }

  return newState;
}
