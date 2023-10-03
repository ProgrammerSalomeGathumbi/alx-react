import React, { Component, PureComponent }from "react";
import closeIcon from "../assets/close-icon.png";
import NotificationItem from "./NotificationItem";
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';
import { getUnreadNotificationsByType } from '../selectors/notificationSelectors';
import { setNotificationFilter, markAsRead, fetchNotifications } from '../actions/notificationActionCreators';
import { connect } from 'react-redux';
import { StyleSheet, css } from 'aphrodite';

const fadeIn = {
  '0%': { opacity: 0.5 },
  '100%': { opacity: 1 },
};

const bounce = {
  '0%, 100%': { transform: 'translateY(0px)' },
  '50%': { transform: 'translateY(-5px)' },
};

const styles = StyleSheet.create({
	Notifications: {
		padding: '2em',
		border: '2px dashed red',
	},
	menuItem: {
		textAlign: 'right',
		float: 'right',
                backgroundColor: '#fff8f8',
                cursor: 'pointer', 
                transition: 'background-color 0.3s ease', 
                 ':hover': {
                  backgroundColor: '#fff', 
                  animationName: [fadeIn, bounce], 
                  animationDuration: '1s, 0.5s', 
                  animationIterationCount: '3', 
		  }},
	'notification-header': {
		display: 'flex',
		justifyContent: 'space-between',
	},
	'flex-area': {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-end',
	},
	mobile: {
		'@media (max-width: 375px)': {
			display: 'block',
			height: '100vh',
			width: '100vw',
			marginLeft: 'auto',
			marginRight: 'auto',
			border: 'none',
			fontSize: '20px',
			padding: '0',
		},
	},
});
class Notifications extends PureComponent {
   constructor(props) {
     super(props);

   }
    useEffect(() => {
       this.props.fetchNotifications();
  }, []);
  render () {
   const Notifications = ({ displayDrawer, listNotifications, handleDisplayDrawer, handleHideDrawer, markNotificationAsRead, setFilterUrgent, setFilterDefault }) => {
  useEffect(() => {
    fetchNotifications();
  }, []);


   return (
     <React.Fragment>
      <div className={displayDrawer ? css(styles.notificationsContainer, styles.drawerOpen) : css(styles.notificationsContainer)}>
        <div className={displayDrawer ? css(styles.none) : css(styles.menuItem, styles.hover)} onClick={() => { handleDisplayDrawer(); }}>
          <p>Your notifications</p>
        </div>
        {displayDrawer ? (
          <div className={css(styles['flex-area'])}>
            <div className={css(styles.Notifications, styles.mobile)}>
              <div className={css(styles['notification-header'])}>
                <button aria-label='Set filter to URGENT' onClick={setFilterUrgent}>‼️</button>
                <button aria-label='Set filter to DEFAULT' onClick={setFilterDefault}>💠</button>
                <NotificationItem value='Here is the list of notifications' />
                <button aria-label='Close' onClick={() => { console.log('Close button has been clicked'); handleHideDrawer(); }}>
                  <img src={closeIcon} alt='Close-Icon' />
                </button>
              </div>
              <ul>
                {listNotifications && listNotifications.length > 0 ? (
                  listNotifications.map(({ id, html, type, value }) => (
                    <NotificationItem key={id} type={type} value={value} html={html} markAsRead={markNotificationAsRead} />
                  ))
                ) : (
                  <div className={css(styles['notification-header'])}>
                    <NotificationItem value='No new notification for now' />
                  </div>
                )}
              </ul>
            </div>
          </div>
        ) : null}
      </div>
    </React.Fragment>	
);
};
};

Notifications.propTypes = {
	displayDrawer: PropTypes.bool,
        listNotifications:PropTypes.arrayOf(NotificationItemShape),
        handleDisplayDrawer: PropTypes.func,
        handleHideDrawer: PropTypes.func,
	markNotificationAsRead: PropTypes.func,
        fetchNotifications: PropTypes.func.isRequired,
         setFilterUrgent: PropTypes.func.isRequired,
         setFilterDefault: PropTypes.func.isRequired,
};

Notifications.defaultProps = {
	displayDrawer: false,
        listNotifications: [],
       handleDisplayDrawer: () => {},
       handleHideDrawer: () => {},
       markNotificationAsRead: () => {},       
};

const mapStateToProps = state => ({
  listNotifications: getUnreadNotificationsByType(state),
});

const mapDispatchToProps = dispatch => ({
  fetchNotifications: () => dispatch(fetchNotifications()),
  markNotificationAsRead: (id) => dispatch(markAsRead(id)),
  setFilterUrgent: () => dispatch(setNotificationFilter('urgent')),
  setFilterDefault: () => dispatch(setNotificationFilter('default')),
});

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
