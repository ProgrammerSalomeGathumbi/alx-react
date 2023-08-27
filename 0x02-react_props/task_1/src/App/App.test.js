import React from "react";
import App frm "./App";
import { shallow } from "enzyme";

describe('App Component', () => {
	it('renders without crashing', () => {
		const wrap = shallow(<App />);
		expect(wrap).toBeDefined();
		});
		
});
