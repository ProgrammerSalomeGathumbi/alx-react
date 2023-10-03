import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE } from './uiActionTypes';
import fetch from 'node-fetch';

export function login(email, password) {
  return {
    type: LOGIN,
    user: {
      email,
      password,
    },
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}

export function displayNotificationDrawer() {
  return {
    type: DISPLAY_NOTIFICATION_DRAWER,
  };
}

export function hideNotificationDrawer() {
  return {
    type: HIDE_NOTIFICATION_DRAWER,
  };
}
export function loginSuccess() {
  return {
    type: LOGIN_SUCCESS,
  };
}

export function loginFailure() {
  return {
    type: LOGIN_FAILURE,
  };
}
export const boundLogin = (email, password) => (dispatch) => {
  dispatch(login(email, password));
};

export const boundLogout = () => (dispatch) => {
  dispatch(logout());
};

export const boundDisplayNotificationDrawer = () => (dispatch) => {
  dispatch(displayNotificationDrawer());
};

export const boundHideNotificationDrawer = () => (dispatch) => {
  dispatch(hideNotificationDrawer());
};
export function loginRequest(email, password) {
  return (dispatch) => {
    boundLogin(email, password));

    fetch('http://localhost:8564/login-success.json')
      .then((response) => res.json())
      .then((json) => dispatch(loginSuccess()))		      
      .catch((error) => dispatch(loginFailure()));
      
  };
}
