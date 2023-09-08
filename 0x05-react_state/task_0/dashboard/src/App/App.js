import React from 'react';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import { getLatestNotification} from "../utils/utils";
import PropTypes from 'prop-types';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import BodySection from './BodySection';
import { StyleSheet, css } from 'aphrodite';

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
this.state = { displayDrawer: false };

		this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
	 	this.handleHideDrawer = this.handleHideDrawer.bind(this);
                this.handleKeyPress = this.handleKeyPress.bind(this);
 } 	
 listCourses = [
	{ id: 1, name: 'ES6', credit: 60 },
	{ id: 2, name: 'Webpack', credit: 20 },
	{ id: 3, name: 'React', credit: 40 },
];

 listNotifications = [
	{ id: 1, type: 'default', value: 'New course available' },
	{ id: 2, type: 'urgent', value: 'New resume available' },
	{ id: 3, type: 'urgent', html: getLatestNotification() },
];

handleKeyDown = (event) => {
  if (event.ctrlKey && event.key == 'h') {
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
handleDisplayDrawer() {
		this.setState({ displayDrawer: true });
	}

handleHideDrawer() {
		this.setState({ displayDrawer: false });
	}

  render () {	
  return (
      <React.Fragment>
      <div className={css(styles.App)}>
      <div className={css(styles.heading-section)}>
      <Notifications listNotifications={this.listNotifications} displayDrawer={this.state.displayDrawer} handleDisplayDrawer={this.handleDisplayDrawer} handleHideDrawer={this.handleHideDrawer}/>
      <Header />
      </div>
      {this.props.isLoggedIn ? (
      <BodySectionWithMarginBottom title='Course list'>
            <CourseList listCourses={this.listCourses} />
      </BodySectionWithMarginBottom>
	   ) :(
      <BodySectionWithMarginBottom title='Log in to continue'>
             <Login />
       </BodySectionWithMarginBottom>)}
      <BodySection title='News from the School'>
         <p>some random text</p>
      </BodySection>
      <Footer className={css(styles.App-footer)}/>
      </div>
      </React.Fragment>
	);
}
}
App.defaultProps = {
	isLoggedIn: false,
};

App.propTypes = {
	isLoggedIn: PropTypes.bool,
        logOut: PropTypes.func,  		    
};

export default App;
