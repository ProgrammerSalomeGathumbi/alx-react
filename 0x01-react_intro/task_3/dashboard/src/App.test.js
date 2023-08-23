import React from "react";
import App frm "./App";
import { shallow } from "enzyme";

describe('App Component', () => {
	it('renders without crashing', () => {
		const wrap = shallow(<App />);
		expect(wrap).toBeDefined();
		});
	it('renders a div with the class App-header', () => {
		const wrap = shallow(<App />);
		expect(wrap.find('.App-header')).toHaveLength(1);
	});
	it('renders a div with the class App-body', () => {
		const wrap = shallow(<App />);
		expect(wrap.find('.App-body')).toHaveLength(1);
	});
	it('renders a div with the class App-footer', () => {
		const wrap = shallow(<App />);
		expect(wrap.find('.App-footer')).toHaveLength(1);
	});			
});