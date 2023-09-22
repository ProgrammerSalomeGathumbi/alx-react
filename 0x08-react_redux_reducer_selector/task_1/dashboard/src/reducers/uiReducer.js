import * as actionTypes from '../actions/uiActionTypes';
import { Map } from 'immutable';

const initialState = Map({
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: {},
});

export default function uiReducer (state = initialState, action) {
 switch (action.type) {
    case actionTypes.DISPLAY_NOTIFICATION_DRAWER:
      return state.set('isNotificationDrawerVisible': true);
    case actionTypes.HIDE_NOTIFICATION_DRAWER:
       return state.set('isNotificationDrawerVisible': false);
    case actionTypes.LOGIN_SUCCESS:
     return state.set('isUserLoggedIn': true);
    case actionTypes.LOGIN_FAILURE:
     return state.set('isUSerLoggedIn': false);
    case actionTypes.LOGOUT:
      return state.set('isUserLoggedIn': false;
    default:
      return state;
  }
}
