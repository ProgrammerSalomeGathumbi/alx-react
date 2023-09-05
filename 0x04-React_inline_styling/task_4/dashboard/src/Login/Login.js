import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
	'App-body': {
		fontSize: '1.4rem',
		padding: '1.2em',
		height: '45%',
	},

	'form-inputs': {
		display: 'flex',
		gap: '2em',
		alignItems: 'center',
	},

	input: {
		height: '1.4rem',
		marginLeft: '10px',
	},
	mobile: {
		'@media (max-width: 375px)': {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'flex-start',
			gap: '0.5em',
		},
	},
});
function Login () {
    return (
        <React.Fragment>
            <div className={css(styles['App-body'])}>
        <p>
          Login to access the full dashboard
        </p>
        <form className={css(styles['form-inputs'], styles.mobile)}>
          <label htmlFor="email">Email</label>
          <input className={css(styles.input)} type="email" name="email"></input>
          <label htmlFor="password">Password</label>
          <input className={css(styles.input)} type="password" name="password"></input>
          <button>OK</button>
          </form> 

	</div>
        </React.Fragment>
    );
}
export default Login;
