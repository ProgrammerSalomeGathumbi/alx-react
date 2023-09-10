import React from "react";
import closeIcon from "../assets/close-icon.png";
import NotificationItem from "./NotificationItem";
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css } from 'aphrodite';

const fadeIn = keyframes({
  '0%': { opacity: 0.5 },
  '100%': { opacity: 1 },
});

const bounce = keyframes({
  '0%, 100%': { transform: 'translateY(0px)' },
  '50%': { transform: 'translateY(-5px)' },
});

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
	},
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

class Notifications extends React.Component {
   constructor(props) {
     super(props);

     this.markAsRead = this.markAsRead.bind(this);
   }
   shouldComponentUpdate(nextProps) {
     return (nextProps.length > this.props.listNotifications.length ||
	     nextProps.displayDrawer !== this.props.displayDrawer
	);
   }
   markAsRead(id) {
     console.log(`Notification ${id} has been marked as read`);
   }   
  render () {
	  const {displayDrawer,	listNotifications,handleDisplayDrawer,handleHideDrawer,
		} = this.props;
   return (
     <React.Fragment>
     <div className={displayDrawer ? css(styles.notificationsContainer, styles.drawerOpen) : css(styles.notificationsContainer)}>

         <div className={displayDrawer ? css(styles.none) : css(styles.menuItem, styles.hover)}	onClick={() => {
			handleDisplayDrawer();}}>
			  <p>Your notifications</p>
			  </div>

	{displayDrawer ? (<div className={css(styles['flex-area'])}>
			  <div className={css(styles.Notifications, styles.mobile)}>
                          <ul>
			    {this.props.listNotifications && this.props.listNotifications.length > 0 ? (
			    this.props.listNotifications.map(({ id, html, type, value }) => (
			   <NotificationItem key={id} type={type} value={value} html={html}/>
	  		   ))
                           ) : (
			  <div className={css(styles['notification-header'])}>
                          <NotificationItem value='No new notification for now' />
			  <button aria-label='Close' onClick={console.log('Close button has been clicked')} handleHideDrawer(); >
                          <img src={closeIcon} alt='Close-Icon'	/>
			  </button>
			  </div>
			  )}
			  </ul>
			  </div>
			  </div>
			  ) : (
			)}
    </React.Fragment>
	);
};
};

Notifications.propTypes = {
	displayDrawer: PropTypes.bool,
        listNotificatins:PropTypes.arrayof(NotificationItemShape),
        handleDisplayDrawer: PropTypes.func,
        handleHideDrawer: PropTypes.func,
};

Notifications.defaultProps = {
	displayDrawer: false,
        listNotifications: [],
       handleDisplayDrawer: () => {},
       handleHideDrawer: () => {},	
};

export default Notifications;
