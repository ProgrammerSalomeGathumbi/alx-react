import { NotificationTypeFilters, MARK_AS_READ, SET_TYPE_FILTER, SET_LOADING_STATE,
  FETCH_NOTIFICATIONS_SUCCESS } from './notificationActionTypes';

export function markAsRead(index) {
  return {
    type: MARK_AS_READ,
    index,
  };
}

export function setNotificationFilter(filter) {
  return {
    type: SET_TYPE_FILTER,
    filter,
  };
}
export const boundMarkAsRead = (index) => (dispatch) => {
  dispatch(markAsRead(index));
};

export const boundSetNotificationFilter = (filter) => (dispatch) => {
  dispatch(setNotificationFilter(filter));
}

export function setLoadingState(isLoading) {
  return {
    type: SET_LOADING_STATE,
    isLoading
  };
}

export function setNotifications(data) {
  return {
    type: FETCH_NOTIFICATIONS_SUCCESS,
    data
  };
}


export function fetchNotifications() {
  return (dispatch) => {
    dispatch(setLoadingState(true));

    fetch('/notifications.json')
      .then(response => response.json())
      .then(data => {
        dispatch(setNotifications(data));

        dispatch(setLoadingState(false));
      })
      .catch(error => {
        console.error('Error fetching notifications:', error);

        dispatch(setLoadingState(false));
      });
  };
}

