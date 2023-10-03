import React from 'react';
import { shallow } from 'enzyme';
import NotificationsContainer from './NotificationsContainer';

describe('NotificationsContainer component tests', () => {
  it('should fetch notifications on mount', () => {
    const fetchNotificationsMock = jest.fn();
    shallow(<NotificationsContainer fetchNotifications={fetchNotificationsMock} />);
    expect(fetchNotificationsMock).toHaveBeenCalled();
  });
});
