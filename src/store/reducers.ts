import { Actions, ActionTypes } from "./actions";

export interface IState {
  time: number;
}

const initialState: IState = {
  time: 0
};

export function rootReducer(currentState = initialState, action: Actions) {

  switch (action.type) {
    case ActionTypes.UPDATE_TIME_ACTION: {
      return { ...currentState, time: action.payload };
    }
    case ActionTypes.RESET_TIME_ACTION: {
      return { ...currentState, time: 0 };
    }
  }

  return currentState;
}
