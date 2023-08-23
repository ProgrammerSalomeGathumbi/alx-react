import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('Notifications Component', () => {
	it('renders without crashing', () => {
		const wrap = shallow(<Notifications />);
		expect(wrap).toBeDefined();
		});
	it('renders three list items', () => {
		const wrap = shallow(<Notifications />);
		expect(wrap.find('li')).toHaveLength(3);
	});
	it('renders the text "Here is the list of notifications"', () => {
		const wrap = shallow(<Notifications/>);
		expect(wrap.text()).toContain('Here is the list of notifications').toHaveLength(1);
	});
});	