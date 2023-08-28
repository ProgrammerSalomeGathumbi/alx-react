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
		const wrap = shallow(<Notifications/>);
		expect(wrap.text()).toContain('Here is the list of notifications').toHaveLength(1);
	});
	it('renders the correct HTML for the first NotificationItem', () => {
               const wrap = shallow(<Notifications />);
               const notificationItem = wrap.find(NotificationItem).first();
               expect(notificationItem.prop('html')).toEqual({ __html: '<u>test1</u>' });
  });
});	
