import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/uiActionCreators';
import logo from '../assets/Holberton-Logo.jpg';
import { StyleSheet, css } from 'aphrodite';
import { AppContext } from '../App/AppContext';

const styles = StyleSheet.create({
	'App-header': {
		fontSize: '1.4rem',
		color: 'red',
		display: 'flex',
		alignItems: 'center',
		padding: '1.2em',
	},

	img: {
		width: '250px',
		height: '250px',
	},
	greeting: {
		marginTop: '1rem',
	},
	logout: {
		cursor: 'pointer',
	},
});
class Header extends React.Component {
   render() {   
   const { user, logout } = this.props;
   const data = this.context;
   return (

    <div className={css(styles['App-header'])}>
        <img src={logo} className={css(styles.img)} alt="logo" />
	<h1>School dashboard</h1>
	{data.user.isLoggedIn && (
	<div className={css(styles.greeting)} id='logoutSection'>
	Welcome {data.user.email}{' '}
	<a className={css(styles.logout)} onClick={data.logOut}>(logout)</a>
	</div>
	)}
	</div>
   );
   }
   }
const mapStateToProps = (state) => {
  return {
    user: state.uiReducer.user
  };
};

export default connect(mapStateToProps, { logout })(Header);
