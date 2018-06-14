import * as React from 'react';
import { shallow } from 'enzyme';
import { TickerControl } from './TickerControl';

test('calls stopTicker when the stop button is clicked', () => {
  // Arrange
  const start = jest.fn();
  const stop = jest.fn();
  const component = shallow(<TickerControl startTicker={start}
                                           stopTicker={stop}/>);

  // Act
  component.find('button').last().simulate('click');

  // Assert
  expect(stop).toHaveBeenCalled();
  expect(start).not.toHaveBeenCalled();
});
