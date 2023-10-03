import * as actionTypes from '../actions/uiActionTypes';
import { Map } from 'immutable';

const initialState = Map({
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: null,
});

export default function uiReducer (state = initialState, action) {
 switch (action.type) {
    case actionTypes.DISPLAY_NOTIFICATION_DRAWER:
      return state.set('isNotificationDrawerVisible', true);
    case actionTypes.HIDE_NOTIFICATION_DRAWER:
       return state.set('isNotificationDrawerVisible', false);
    case actionTypes.LOGIN_SUCCESS:
     return state.set('isUserLoggedIn', true).set('user', action.user);
    case actionTypes.LOGIN_FAILURE:
     return state.set('isUSerLoggedIn', false).set('user', null);
    case actionTypes.LOGOUT:
      return state.set('isUserLoggedIn', false).set('user', null);
    default:
      return state;
  }
}
