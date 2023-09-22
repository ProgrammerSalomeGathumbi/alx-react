import uiReducer from './uiReducer';
import * as actionTypes from '../actions/uiActionTypes';

describe('uiReducer', () => {
  it('should return the initial state when no action is passed', () => {
    const initialState = {
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    };
    const newState = uiReducer(undefined, {});
    expect(newState).toEqual(initialState);
  });

  it('should return the initial state when SELECT_COURSE action is passed', () => {
    const initialState = {
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    };
    const action = { type: 'SELECT_COURSE' };
    const newState = uiReducer(initialState, action);
    expect(newState).toEqual(initialState);
  });

  it('should set isNotificationDrawerVisible to true when DISPLAY_NOTIFICATION_DRAWER action is passed', () => {
    const initialState = {
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    };
    const action = { type: actionTypes.DISPLAY_NOTIFICATION_DRAWER };
    const newState = uiReducer(initialState, action);
    expect(newState.isNotificationDrawerVisible).toBe(true);
  });
});  
