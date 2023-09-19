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
        button: {
		'@media (max-width: 900px)': {
			border: '2px solid gold',
			backgroundColor: 'transparent',
			width: '5vw',
		},
	}, 
});
class Login extends React.Component {
	constructor(props) {
		super(props);

		this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
		this.handleChangeEmail = this.handleChangeEmail.bind(this);
		this.handleChangePassword = this.handleChangePassword.bind(this);
		this.state = {
			email: '',
			password: '',
			enableSubmit: false,
		};
	}

	handleLoginSubmit(event) {
		event.preventDefault();
		this.props.logIn(this.state.email, this.state.password);
		this.setState({ isLoggedIn: true });
	}

	handleChangeEmail(event) {
		this.setState({ email: event.target.value });
		this.state.email !== '' && this.state.password !== ''
			? this.setState({ enableSubmit: true })
			: this.setState({ enableSubmit: false });
	}

	handleChangePassword(event) {
		this.setState({ password: event.target.value });
		this.state.email !== '' && this.state.password !== ''
			? this.setState({ enableSubmit: true })
			: this.setState({ enableSubmit: false });
	}
    render (){
    return (
        <React.Fragment>
            <div className={css(styles['App-body'])}>
        <p>
          Login to access the full dashboard
        </p>
        <form onSubmit={this.handleLoginSubmit} className={css(styles['form-inputs'], styles.mobile)}>
          <label htmlFor="email">Email</label>
          <input className={css(styles.input)} type="email" name="email" onChange={this.handleChangeEmail} value={this.state.email}></input>
          <label htmlFor="password">Password</label>
          <input className={css(styles.input)} type="password" name="password" onChange={this.handleChangePassword} value={this.state.password}></input>
	  <input className={css(styles.button)} type='submit'value='OK' disabled={!this.state.enableSubmit}/>
          </form> 

	</div>
        </React.Fragment>
    );
    }}
export default Login;
