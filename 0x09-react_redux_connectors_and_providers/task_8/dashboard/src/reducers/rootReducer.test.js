import rootReducer from './rootReducer'; // Import your rootReducer
import { Map } from 'immutable';

describe('rootReducer', () => {
  it('should return the initial state', () => {
    const initialState = rootReducer(undefined, {});
    const expectedInitialState = {
      courses: Map({}),
      notifications: Map({}),
      ui: Map({}),
    };

    expect(initialState.toJS()).toEqual(expectedInitialState);
  });
});
