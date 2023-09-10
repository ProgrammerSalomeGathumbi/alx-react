import React from "react";
import App from "./App";
import { shallow } from "enzyme";
import Notifications from './Notifications';
import Header from './Header';
import Login from './Login';
import Footer from './Footer';
import CourseList from '../CourseList/CourseList';
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
	StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
	StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('App Component', () => {
	it('renders without crashing', () => {
		const wrapper = shallow(<App />);
		expect(wrapper).toBeDefined();
		});
	it('contains the Notification component', () => {
		const wrapper  = shallow(<App />);
		expect(wraper.find(Notifications)).toHaveLength(1);
	});	
	it ('contains the Header component', () => {
		const  wrapper = shallow(<App />);
		expect(wrapper.find(Header)).toHaveLength(1);
	});
	it ('contains the Login component', () =>  {
		const wrapper = shallow(<App />);
		expect(wrapper.find(Login)).toHaveLength(1);
	});
	it('contains the Footer component', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.find(Footer)).toHaveLength(1);
	  });
	it('does not render courselist if logged out', () => {
		const wrapper = shallow(<App />);

		wrapper.setProps({ isLogedIn: false });

		expect(wrapper.contains(<CourseList />)).toBe(false);
	});
	it('renders courselist if logged in', () => {
		const wrapper = shallow(<App isLoggedIn={true} />);

		expect(wrapper.contains(<CourseList />)).toBe(true);
		expect(wrapper.contains(<Login />)).toBe(false);
	});
	it('calls logOut function when Ctrl + h is pressed', () => {
                 const logMock = jest.fn();
                 const wrapper = shallow(<App isLoggedIn={true} logOut={logMock} />);
                 const event = new KeyboardEvent('keydown', {key: 'h', ctrlKey: true});
		 document.dispatchEvent(event);
		 expect(logMock).toHaveBeenCalled();
		 expect(window.alert).toHaveBeenCalledWith('Logging you out');
	});
	it('displayDrawer initial value should be set to false', () => {
		const wrapper = mount(<App />);

		expect(wrapper.state().displayDrawer).toBe(false);
	});

	it('should set displayDrawer to true after calling handleDisplayDrawer', () => {
		const wrapper = shallow(<App />);
		wrapper.instance().handleDisplayDrawer();

		expect(wrapper.state().displayDrawer).toBe(true);
	});

	it('should set displayDrawer to false after calling handleHideDrawer', () => {
		const wrapper = shallow(<App />);
		wrapper.instance().handleHideDrawer();

		expect(wrapper.state().displayDrawer).toBe(false);
	});
});
