import React from 'react';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import { getLatestNotification} from "../utils/utils";
import PropTypes from 'prop-types';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import { StyleSheet, css } from 'aphrodite';
import { AppContext, defaultUser } from './AppContext';
import { connect } from 'react-redux'; 

const styles = StyleSheet.create({
	App: {
		height: '100vh',
		maxWidth: '100vw',
	},
	'heading-section': {
		borderBottom: '4px solid red',
		display: 'flex',
		justifyContent: 'space-between',
		flexDirection: 'row-reverse',
	},
	'App-footer': {
		borderTop: '4px solid red',
		fontSize: '1.4rem',
		padding: '0.5em',
		textAlign: 'center',
		fontStyle: 'italic',
	},
});
class App extends React.Component {
 constructor(props) {
   super(props);
   this.state = { 
         displayDrawer: false,
	 user: defaultUser,
	 logOut: () => {this.setState({ user: defaultUser })}, 
         listNotifications: [
	    { id: 1, type: 'default', value: 'New course available' },
	    { id: 2, type: 'urgent', value: 'New resume available' },
	    { id: 3, type: 'urgent', html: getLatestNotification() },
         ],
  };

		this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
	 	this.handleHideDrawer = this.handleHideDrawer.bind(this);
                this.handleKeyPress = this.handleKeyPress.bind(this);
		this.logIn = this.logIn.bind(this);
               this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
 } 	
 listCourses = [
	{ id: 1, name: 'ES6', credit: 60 },
	{ id: 2, name: 'Webpack', credit: 20 },
	{ id: 3, name: 'React', credit: 40 },
];


handleKeyPress = (event) => {
  if (event.ctrlKey && event.key === 'h') {
    alert('Logging you out');
    this.state.logOut();    
  }
};  
componentDidMount () {
  document.addEventListener('keydown', this.handleKeyDown);
}
componentWillUnmount () {
  document.removeEventListener('keydown', this.handleKeyDown);
}
handleDisplayDrawer() {
		this.setState({ displayDrawer: true });
	}

handleHideDrawer() {
		this.setState({ displayDrawer: false });
	}
logIn(email, password) {
		this.setState({
			user: {
				email: email,
				password: password,
				isLoggedIn: true,
			},
		});
	}
markNotificationAsRead(id) {
		const read = this.state.listNotifications.filter(
			(notification) => notification.id !== id
		);

		this.setState({ listNotifications: read });
	}
  render () {
   const { user, logOut } = this.state;
  return (
      <React.Fragment>
      <AppContext.Provider value={{ user, logOut }}>
      <div className={css(styles.App)}>
      <div className={css(styles['heading-section'])}>
      <Notifications markNotificationAsRead={this.markNotificationAsRead}  listNotifications={this.state.listNotifications} displayDrawer={this.state.displayDrawer} handleDisplayDrawer={this.handleDisplayDrawer} handleHideDrawer={this.handleHideDrawer}/>
      <Header />
      </div>
      {this.state.user.isLoggedIn ? (
      <BodySectionWithMarginBottom title='Course list'>
            <CourseList listCourses={this.listCourses} />
      </BodySectionWithMarginBottom>
	   ) :(
      <BodySectionWithMarginBottom title='Log in to continue'>
             <Login logIn={this.logIn} />
       </BodySectionWithMarginBottom>)}
      <BodySection title='News from the School'>
         <p>some random text</p>
      </BodySection>
      <Footer className={css(styles['App-footer'])}/>
      </div>
      </AppContext.Provider>
      </React.Fragment>
	);
}
}

const mapStateToProps = (state) => {
	  return {
		      isLoggedIn: state.uiReducer.isLoggedIn 
					    };
};
export default connect(mapStateToProps)(App);
