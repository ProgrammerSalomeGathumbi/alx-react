import React from "react";
import App from "./App";
import { shallow } from "enzyme";
import Notifications from './Notifications';
import Header from './Header';
import Login from './Login';
import Footer from './Footer';
import CourseList from '../CourseList/CourseList';

describe('App Component', () => {
	it('renders without crashing', () => {
		const wrap = shallow(<App />);
		expect(wrap).toBeDefined();
		});
	it('contains the Notification component', () => {
		const wrap  = shallow(<App />);
		expect(wrapper.find(Notifications)).toHaveLength(1);
	});	
	it ('contains the Header component', () => {
		const  wrap = shallow(<App />);
		expect(wrapper.find(Header)).toHaveLength(1);
	});
	it ('contains the Login component', () =>  {
		const wrap = shallow(<App />);
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
});
