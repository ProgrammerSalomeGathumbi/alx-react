import { filterTypeSelected, getNotifications, getUnreadNotifications } from './notificationSelector';
import { fromJS } from 'immutable';

describe('notification selectors', () => {
  const state = fromJS({
    notifications: {
      filter: 'DEFAULT',
      notifications: {
        1: { id: 1, isRead: false, type: 'default', value: 'Notification 1' },
        2: { id: 2, isRead: true, type: 'urgent', value: 'Notification 2' },
        3: { id: 3, isRead: false, type: 'default', value: 'Notification 3' },
      },
    },
  });

  it('filterTypeSelected should return the selected filter', () => {
    const selectedFilter = filterTypeSelected(state);
    expect(selectedFilter).toEqual('DEFAULT');
  });

  it('getNotifications should return a list of notifications in a Map', () => {
    const notifications = getNotifications(state);
    expect(notifications).toEqual(
      fromJS({
        1: { id: 1, isRead: false, type: 'default', value: 'Notification 1' },
        2: { id: 2, isRead: true, type: 'urgent', value: 'Notification 2' },
        3: { id: 3, isRead: false, type: 'default', value: 'Notification 3' },
      })
    );
  });

  it('getUnreadNotifications should return a list of unread notifications in a Map', () => {
    const unreadNotifications = getUnreadNotifications(state);
    expect(unreadNotifications).toEqual(
      fromJS({
        1: { id: 1, isRead: false, type: 'default', value: 'Notification 1' },
        3: { id: 3, isRead: false, type: 'default', value: 'Notification 3' },
      })
    );
  });
});
