import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Notifications from './Notifications';
import { fetchNotifications, markAsRead, setNotificationFilter } from '../actions/notificationActionCreators';
import { getUnreadNotificationsByType } from '../selectors/notificationSelectors';

const NotificationsContainer = ({
  fetchNotifications,
  listNotifications,
  markNotificationAsRead,
  setFilterUrgent,
  setFilterDefault,
}) => {
  useEffect(() => {
    fetchNotifications(); 
  }, [fetchNotifications]);

  return (
    <Notifications
      listNotifications={listNotifications}
      markNotificationAsRead={markNotificationAsRead}
      setFilterUrgent={setFilterUrgent}
      setFilterDefault={setFilterDefault}
    />
  );
};

const mapStateToProps = state => ({
  listNotifications: getUnreadNotificationsByType(state),
});

const mapDispatchToProps = {
  fetchNotifications,
  markNotificationAsRead: markAsRead,
  setFilterUrgent: () => setNotificationFilter('urgent'),
  setFilterDefault: () => setNotificationFilter('default'),
};

export default connect(mapStateToProps, mapDispatchToProps)(NotificationsContainer);
