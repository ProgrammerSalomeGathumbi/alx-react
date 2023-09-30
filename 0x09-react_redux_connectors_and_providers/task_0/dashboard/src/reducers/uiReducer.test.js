import uiReducer from './uiReducer';
import * as actionTypes from '../actions/uiActionTypes';

describe('uiReducer', () => {
  it('should return the initial state when no action is passed', () => {
    const initialState = uiReducer(undefined, {});
    expect(initialState.toJS()).toEqual({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    });
  });

  it('should return the initial state when SELECT_COURSE action is passed', () => {
    const initialState = uiReducer(undefined, { type: 'SELECT_COURSE' });
    expect(initialState.toJS()).toEqual({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    });
  });

  it('should set isNotificationDrawerVisible to true when DISPLAY_NOTIFICATION_DRAWER action is passed', () => {
    const newState = uiReducer(undefined, { type: actionTypes.DISPLAY_NOTIFICATION_DRAWER });
    expect(newState.get('isNotificationDrawerVisible')).toBe(true);
  });
});
