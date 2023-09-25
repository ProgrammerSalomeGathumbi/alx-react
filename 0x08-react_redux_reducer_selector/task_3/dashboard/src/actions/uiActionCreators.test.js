import { login, logout, displayNotificationDrawer, hideNotificationDrawer, loginSuccess, loginFailure } from '../uiActionCreators';
import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE } from '../uiActionTypes';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('login action creator', () => {
  it('should create an action to log in a user', () => {
    const email = 'test@example.com';
    const password = 'password123';
    const expectedAction = {
      type: LOGIN,
      user: {
        email,
        password,
      },
    };
    expect(login(email, password)).toEqual(expectedAction);
  });
});

describe('logout action creator', () => {
  it('should create an action to log out a user', () => {
    const expectedAction = {
      type: LOGOUT,
    };
    expect(logout()).toEqual(expectedAction);
  });
});

describe('displayNotificationDrawer action creator', () => {
  it('should create an action to display the notification drawer', () => {
    const expectedAction = {
      type: DISPLAY_NOTIFICATION_DRAWER,
    };
    expect(displayNotificationDrawer()).toEqual(expectedAction);
  });
});

describe('hideNotificationDrawer action creator', () => {
  it('should create an action to hide the notification drawer', () => {
    const expectedAction = {
      type: HIDE_NOTIFICATION_DRAWER,
    };
    expect(hideNotificationDrawer()).toEqual(expectedAction);
  });
});

describe('loginRequest action', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('dispatches LOGIN and LOGIN_SUCCESS actions when API call succeeds', () => {
    const expectedActions = [
      { type: LOGIN, user: { email: 'test@example.com', password: 'password' } },
      { type: LOGIN_SUCCESS },
    ];

    fetchMock.getOnce('/login-success.json', {
      body: { message: 'Success' },
      headers: { 'content-type': 'application/json' },
    });

    const store = mockStore({});

    return store.dispatch(loginRequest('test@example.com', 'password')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('dispatches LOGIN and LOGIN_FAILURE actions when API call fails', () => {
    const expectedActions = [
      { type: LOGIN, user: { email: 'test@example.com', password: 'password' } },
      { type: LOGIN_FAILURE },
    ];

    fetchMock.getOnce('/login-success.json', 500);

    const store = mockStore({});

    return store.dispatch(loginRequest('test@example.com', 'password')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
