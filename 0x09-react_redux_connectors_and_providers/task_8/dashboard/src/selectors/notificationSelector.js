import { createSelector } from 'reselect';

const selectNotifications = (state) => state.notifications;

export const filterTypeSelected = createSelector(
  [selectNotifications],
  (notifications) => notifications.get('filter')
);

export const getNotifications = createSelector(
  [selectNotifications],
  (notifications) => notifications.get('notifications')
);

export const getUnreadNotificationsByType = createSelector(
  [filterTypeSelected, getNotifications],
  (filter, notifications) => {
    if (filter === 'urgent') {
      return notifications.filter(
        (notification) => notification.get('isRead') && notification.get('type') === 'urgent'
      );
    } else {
      return notifications.filter((notification) => !notification.get('isRead'));
    }
  }
);
