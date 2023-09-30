import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
	default: {
		color: 'blue',
		'@media (max-width: 375px)': {
			borderBottom: '1px solid black',
			listStyle: 'none',
			fontSize: '20px',
			padding: '10px 8px',
		},
	},
	urgent: {
		color: 'red',
		'@media (max-width: 375px)': {
			borderBottom: '1px solid black',
			listStyle: 'none',
			fontSize: '20px',
			padding: '10px 8px',
		},
	},
});

class NotificationItem extends React.Component {
  render () { 	
    const { type, html, value, markAsRead, id } = this.props;
    return (
    <>
    {type && value ? (
  <li className={type === 'default' ? css(styles.default) : css(styles.urgent)} onClick={() => markAsRead(id)} data-notification-type={type}>
    {value}
  </li>
) : null}
{html ? (
  <li className={css(styles.urgent)} onClick={() => markAsRead(id)} data-urgent dangerouslySetInnerHTML={{ __html: html }}></li>
) : null}
    </>
  );
}
}

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  markAsRead: PropTypes.func,
  id: PropTypes.number,
};

NotificationItem.defaultProps = {
	type: 'default',
	markAsRead : () => {
	  console.log('empty func');
	},
        id: 0,	
};

export default NotificationItem;
