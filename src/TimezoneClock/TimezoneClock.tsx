import * as React from 'react';
import Clock from '../Clock/Clock';

import { RouteComponentProps } from 'react-router';
import { Redirect } from 'react-router-dom';

interface ITimezoneClockMatchProps {
  tz: string;
}

interface INeedTime {
  time: number;
}

const timezones = {
  BST: { name: 'BST', offset: -60},
  EDT: { name: 'EDT', offset: -240},
  IST: { name: 'IST', offset: -330},
};

//  FIRA CODE

const TimezoneClock = (props: INeedTime & RouteComponentProps<ITimezoneClockMatchProps>) => {
  return props.match.params.tz !== 'MDT'
  ?  <Clock timezone={timezones[props.match.params.tz]}
            time={props.time}/>
  : <Redirect to="/EDT"/>;
};

export default TimezoneClock;
