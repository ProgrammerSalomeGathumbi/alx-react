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
import { displayNotificationDrawer, hideNotificationDrawer, loginRequest  } from '../actions/uiActionCreators';

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
 static propTypes = {
    user: PropTypes.object.isRequired,
    logOut: PropTypes.func.isRequired,
    displayDrawer: PropTypes.bool.isRequired,
    displayNotificationDrawer: PropTypes.func.isRequired,
    hideNotificationDrawer: PropTypes.func.isRequired,
    isLoggedIn: PropTypes.bool.isRequired,
    login: PropTypes.func.isRequired,
  };

  static defaultProps = {
    user: defaultUser,
    displayDrawer: false,
    isLoggedIn: false,
  };

 listCourses = [
	{ id: 1, name: 'ES6', credit: 60 },
	{ id: 2, name: 'Webpack', credit: 20 },
	{ id: 3, name: 'React', credit: 40 },
];


handleKeyPress = (event) => {
  if (event.ctrlKey && event.key === 'h') {
    alert('Logging you out');
    this.props.logOut();    
  }
};  
componentDidMount () {
  document.addEventListener('keydown', this.handleKeyDown);
}
componentWillUnmount () {
  document.removeEventListener('keydown', this.handleKeyDown);
}
 render () {
  
  const { user, logOut, displayDrawer, displayNotificationDrawer, hideNotificationDrawer, isLoggedIn, login } = this.props;  
  return (
      <React.Fragment>
      <AppContext.Provider value={{ user, logOut: this.props.logOut }}>
      <div className={css(styles.App)}>
      <div className={css(styles['heading-section'])}>
      <Notifications
             markNotificationAsRead={this.markNotificationAsRead} 
              listNotifications={this.state.listNotifications}
              displayDrawer={displayDrawer}
              handleDisplayDrawer={displayNotificationDrawer}
              handleHideDrawer={hideNotificationDrawer}/>
      <Header />
      </div>
      {this.state.user.isLoggedIn ?(
      <BodySectionWithMarginBottom title='Course list'>
            <CourseList listCourses={this.listCourses} />
      </BodySectionWithMarginBottom>
	   ) :(
      <BodySectionWithMarginBottom title='Log in to continue'>
             <Login logIn={login} />
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
    isLoggedIn: state.uiReducer.isLoggedIn,
    displayDrawer: state.uiReducer.isNotificationDrawerVisible
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    displayNotificationDrawer: () => dispatch(displayNotificationDrawer()),
    hideNotificationDrawer: () => dispatch(hideNotificationDrawer()),
   login: (email, password) => dispatch(loginRequest(email, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
