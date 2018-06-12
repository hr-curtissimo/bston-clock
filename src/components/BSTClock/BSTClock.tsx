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
  <Clock timezone={timezone}/>
);

export default BSTClock;
