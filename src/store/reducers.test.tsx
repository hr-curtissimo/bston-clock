import { Actions, UpdateTimeAction } from './actions';
import { initialState, rootReducer } from './reducers';

describe('the rootReducer tests', () => {

  test('when given state and update time action, get back updated state', () => {
    // Arrange
    const action = new UpdateTimeAction(3837);
    const state = { 'name of': 5, time: -102030393020292 };

    // Act
    const result = rootReducer(state, action);

    // Assert
    expect(result).not.toBe(state);
    expect(result).toHaveProperty('time', 3837);
    Object.keys(state).forEach(key => {
      if (key === 'time') { return; }
      expect(result).toHaveProperty(key, state[key])
    });
  });

  describe(`actions that don't change state`, () => {
    const action = {};
    let mock: () => any;

    beforeEach(() => {
      mock = jest.fn();
    });

    test('when given state and unknown action, get back state', () => {
      const state = { 'name of': 5, time: -102030393020292 };
      mock();
      const result = rootReducer(state, action as Actions);

      expect(result).toBe(state);
    });

    test('when undefined state and unknown action, get back initial state', () => {
      const result = rootReducer(undefined, action as Actions);

      expect(result).toEqual({ time: 0 });
      expect(result).toBe(initialState);
    });

  });

})
