import { stopTicker } from './async-actions';

test('invoking stopTicker does not call clearInterval', () => {
  // Arrange

  // Act
  stopTicker()();

  // Assert
  // make sure clearInterval was not called
});

test('invoking startTicker calls setInterval', () => {
  clearInterval(0);
});

test('invoking startTicker twice calls setInterval once', () => {
  clearInterval(0);
});

test('invoking stopTicker after startTicker calls clearInterval', () => {
  clearInterval(0);
});

test('invoking stopTicker twice after startTicker calls clearInterval once', () => {
  clearInterval(0);
});

test('after startTicker is called and timers run, "dispatch" is called twice', () => {
  clearInterval(0);
});
