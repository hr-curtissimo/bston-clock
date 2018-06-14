import { Action } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { UpdateTimeAction } from "./actions";
import { IState } from "./reducers";

let handle: number = 0;

function createAction() {
  const payload = new Date().getTime();
  return new UpdateTimeAction(payload);
}

export function startTicker() {
  return (dispatch: ThunkDispatch<IState, void, Action>) => {
    if (!handle) {
      dispatch(createAction());
      handle = window.setInterval(() => {
        dispatch(createAction());
      }, 1000);
    };
  }
}

export function stopTicker() {
  return () => {
    if (handle) {
      clearInterval(handle);
      handle = 0;
    }
  }
}
