import React from "react";
import App from "./App";
import { shallow } from "enzyme";
import Notifications from './Notifications';
import Header from './Header';
import Login from './Login';
import Footer from './Footer';

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
});
