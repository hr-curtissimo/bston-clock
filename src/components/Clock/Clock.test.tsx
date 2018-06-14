import { mount, render, shallow } from 'enzyme';
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { Clock } from './Clock';

import { Keith } from './Keith';

test('shallow: Clock renders time with timezone', () => {
  // Arrange
  const time = 123;
  const timezone = { name: 'BOB', offset: -3.14 };

  // Act
  const component = shallow(<Clock time={time} timezone={timezone} />);

  // Assert
  expect(component).not.toBeNull()
  expect(component.find(Keith)).not.toBeNull();
  expect(component.html()).toContain('BOB');
  expect(component.html()).toContain('19:3:8');
});

test('render: Clock renders time with timezone', () => {
  // Arrange
  const time = 123;
  const timezone = { name: 'BOB', offset: -3.14 };

  // Act
  const component = render(<Clock time={time} timezone={timezone} />);

  // Assert
  expect(component).not.toBeNull()
  expect(component.text()).toContain('19:3:8 KEITH! BOB');
});

test('mount: Clock renders time with timezone', () => {
  // Arrange
  const time = 123;
  const timezone = { name: 'BOB', offset: -3.14 };

  // Act
  const component = mount(<Clock time={time} timezone={timezone} />);

  // Assert
  expect(component).not.toBeNull()
  expect(component.text()).toContain('19:3:8 KEITH! BOB');
});

test('mount: Clock renders time with timezone', () => {
  // Arrange
  let timeout = false;
  const handle = setTimeout(() => timeout = true, 1000);

  const time = 123;
  const timezone = { name: 'BOB', offset: -3.14 };

  // Act
  const component = mount(<Clock time={time} timezone={timezone} />);

  // Assert
  return new Promise((good, bad) => {
    setTimeout(() => {
      clearTimeout(handle);
      if (timeout) { bad('exceeded timeout'); }
      expect(component).not.toBeNull()
      expect(component.text()).toContain('19:3:8 KEITH! BOB');
      good();
    }, 0);
  });
});

test('renders consistently', () => {
  // ARRANGE
  const time = 123;
  const timezone = { name: 'BOB', offset: -3.14 };

  // ACTu
  const tree = renderer
    .create(<Clock time={time} timezone={timezone}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
