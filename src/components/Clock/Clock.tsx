import * as React from 'react';
import { connect } from 'react-redux';
import { IState } from '../../store/reducers';
import { Keith as KC } from './Keith';

interface IClockProps {
  time: number;
  timezone: { name: string; offset: number };
}

function formatDate(d: Date) {
  return `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
}

export const Clock = (props: IClockProps) => {
  const t = new Date(props.time - (props.timezone.offset) * 1000 * 60)

  return (
    <time>{formatDate(t)} <KC /> {props.timezone.name}</time>
  )
};

const mapStateToProps = (state: IState) => {
  return {
    time: state.time
  };
};

export default connect(mapStateToProps)(Clock);
