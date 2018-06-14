import * as React from 'react';
import { connect } from 'react-redux';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { startTicker, stopTicker } from '../../store/async-actions';
import { IState } from '../../store/reducers';

interface ITickerControlProps {
  startTicker: () => any;
  stopTicker: () => any;
}

const TickerControl = (props: ITickerControlProps) => (
  <div>
    <button onClick={props.startTicker}>Start</button>
    <button onClick={props.stopTicker}>Stop</button>
  </div>
);

const mapDispatchToProps = (dispatch: ThunkDispatch<IState, void, Action>) => {
  return {
    startTicker: () => dispatch(startTicker()),
    stopTicker: () => dispatch(stopTicker()),
  }
};

export default connect(
  null,
  mapDispatchToProps
)(TickerControl);
