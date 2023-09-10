import React from 'react';
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
   const data = this.context;
   return (

    <div className={css(style['App-header'])}>
        <img src={logo} className={css(style.img)} alt="logo" />
	<h1>School dashboard</h1>
	</div>
	{data.user.isLoggedIn && (
	<div className={css(styles.greeting)} id='logoutSection'>
	Welcome {data.user.email}{' '}
	<a className={css(styles.logout)} onClick={data.logOut}>(logout)</a>
	</div>
	)}
   );
}
Header.contextType = AppContext;
export default Header;
