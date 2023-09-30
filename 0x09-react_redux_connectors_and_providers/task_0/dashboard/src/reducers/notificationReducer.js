import { Map } from 'immutable';
import { FETCH_NOTIFICATIONS_SUCCESS, SET_TYPE_FILTER, MARK_AS_READ } from '../actions/notificationActionTypes';
import { notificationsNormalizer } from '../schema/notifications';

const initialState = Map({
  filter: 'DEFAULT',
  notifications: Map(),
});

export default notificationReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      const normalizedData = notificationsNormalizer(action.data.entities);
      return state
        .set('notifications', normalizedData.entities.notifications)
        .set('filter', 'DEFAULT');

    case SET_TYPE_FILTER:
      return state.set('filter', action.filter);

    case MARK_AS_READ:
      return state.setIn(['notifications', action.index, 'isRead'], true);

    default:
      return state;
  }
}
