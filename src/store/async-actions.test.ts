import { stopTicker } from './async-actions';

test('invoking stopTicker does not call clearInterval', () => {
  // Arrange

  // Act
  stopTicker()();

  // Assert
  // make sure clearInterval was not called
});

test('invoking startTicker calls setInterval', () => {
});

test('invoking startTicker twice calls setInterval once', () => {
});

test('invoking stopTicker after startTicker calls clearInterval', () => {
});

test('invoking stopTicker twice after startTicker calls clearInterval once', () => {
});

test('after startTicker is called and timers run, "dispatch" is called twice', () => {
});
