import * as actionTypes from '../actions/notificationActionTypes';

const initialState = {
  filter: actionTypes.NotificationTypeFilters.DEFAULT,
  notifications: [],
};

export default notificationReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.FETCH_NOTIFICATIONS_SUCCESS:
      const notifications = action.data.map(notification => ({
        ...notification,
        isRead: false,
      }));
      return {
        ...state,
        notifications,
      };

    case actionTypes.MARK_AS_READ:
      const indexToMarkAsRead = action.index;
      const updatedNotifications = state.notifications.map((notification, index) =>
        index === indexToMarkAsRead ? { ...notification, isRead: true } : notification
      );
      return {
        ...state,
        notifications: updatedNotifications,
      };

    case actionTypes.SET_TYPE_FILTER:
      return {
        ...state,
        filter: action.filter,
      };

    default:
      return state;
  }
};
