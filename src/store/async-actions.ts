import { Action } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { UpdateTimeAction } from "./actions";
import { IState } from "./reducers";

export function startTicker() {
  return (dispatch: ThunkDispatch<IState, void, Action>) => {
    setInterval(() => {
      const payload = new Date().getTime();
      const action = new UpdateTimeAction(payload);
      dispatch(action);
    }, 1000);
  };
}
