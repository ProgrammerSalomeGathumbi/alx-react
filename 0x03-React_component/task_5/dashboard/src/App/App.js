import React from 'react';
import './App.css';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import { getLatestNotification} from "../utils/utils";
import PropTypes from 'prop-types';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import BodySection from './BodySection';

class App extends React.Component {
 constructor(props) {
   super(props);

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
  render () {	
  return (
      <React.Fragment>
      <div className='App'>
      <div className='heading-section'>
      <Notifications listNotifications={this.listNotifications} />
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
      <Footer />
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
