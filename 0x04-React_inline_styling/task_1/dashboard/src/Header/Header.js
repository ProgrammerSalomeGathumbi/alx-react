import React from 'react';
import logo from '../assets/Holberton-Logo.jpg';
import { StyleSheet, css } from 'aphrodite';

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
});
function Header() {
   return (

    <div className={css(style['App-header'])}>
        <img src={logo} className={css(style.img)} alt="logo" />
	<h1>School dashboard</h1>
	</div>
   );
}

export default Header;
