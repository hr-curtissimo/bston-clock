import * as React from 'react';

interface IClockProps {
  time: number;
  timezone: { name: string; offset: number };
}

function formatDate(d: Date) {
  return `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
}

const Clock = (props: IClockProps) => {
  const t = new Date(props.time - (props.timezone.offset) * 1000 * 60)

  return <time>{formatDate(t)} {props.timezone.name}</time>
};

export default Clock;
