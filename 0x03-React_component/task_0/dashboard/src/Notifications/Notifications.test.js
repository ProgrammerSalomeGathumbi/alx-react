import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('Notifications Component', () => {
	it('renders without crashing', () => {
		const wrap = shallow(<Notifications />);
		expect(wrap).toBeDefined();
		});
	it('renders three list items', () => {
		const wrap = shallow(<Notifications />);
		expect(wrap.find('NotificationItem')).toHaveLength(3);

	});
	it('renders the text "Here is the list of notifications"', () => {
		const wrap = shallow(<Notifications displayDrawer={true}/>);
		expect(wrap.text()).toContain('Here is the list of notifications').toHaveLength(1);
	});
	it('displays menu item when displayDrawer is false', () => {
		const wrapper = shallow(<Notifications displayDrawer={false} />);

		expect(wrapper.find('div.menuItem').exists()).toBe(true);
		expect(wrapper.find('div.menuItem').html()).toEqual(
			'<div class="menuItem"><p>Your notifications</p></div>'
		);
	});
	it('does not display notifications when displayDrawer is false', () => {
		const wrapper = shallow(<Notifications displayDrawer={false} />);

		expect(wrapper.find('div.Notifications').exists()).toBe(false);
	});

	it('does not display menuItem when displayDrawer is true', () => {
		const wrapper = shallow(<Notifications displayDrawer={true} />);

		expect(wrapper.find('div.menuItem').exists()).toBe(true);
	});

	it('displays Notifications when displayDrawer is true', () => {
		const wrapper = shallow(<Notifications displayDrawer={true} />);

		expect(wrapper.find('div.Notifications').exists()).toBe(true);
	});
});	
