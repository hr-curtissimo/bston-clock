import * as React from 'react';
import Clock from '../Clock/Clock';

const timezone = {
  name: 'BST',
  offset: -60,
};

interface IBSTClockProps {
  time: number;
}

const BSTClock = (props: IBSTClockProps) => (
  <Clock time={props.time}
         timezone={timezone}/>
);

export default BSTClock;
