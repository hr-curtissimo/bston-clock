import { Action } from 'redux';

export enum ActionTypes {
  UPDATE_TIME_ACTION = 'UPDATE_TIME_ACTION',
  RESET_TIME_ACTION = 'RESET_TIME_ACTION',
}

export class UpdateTimeAction implements Action {
  public readonly type = ActionTypes.UPDATE_TIME_ACTION;
  constructor(
    public payload: number,
  ) {}
}

export class ResetTimeAction implements Action {
  public readonly type = ActionTypes.RESET_TIME_ACTION;
}

export type Actions
  = UpdateTimeAction
  | ResetTimeAction;
