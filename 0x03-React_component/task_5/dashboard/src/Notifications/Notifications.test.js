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
	it('calls console.log with the right message when markAsRead is called', () => {
	         const spy = jest.spyOn(console, 'log');
                  const wrapper = shallow(<Notifications />);
                  const expectedMessage = `Notification ${id} has been marked as read`;
		  wrapper.instance().markAsRead(1);
                  expect(spy).toBeCalledWith(expectedMessage);	  
		  expect(spy).toBeCalledTimes(1);
		  spy.mockRestore();:
	});
	it('doesnt re-render when the list passed as prop is the same', () => {
		const wrapper = shallow(
			<Notifications
				displayDrawer={true}
				listNotifications={listNotifications}
			/>
		);

		expect(wrapper.instance().shouldComponentUpdate(listNotifications)).toBe(
			false
		);
	});

	it('re-renders if listNotifications if listNotifications is changed', () => {
		const newListNotifications = [
			{ id: 1, type: 'default', value: 'New course available' },
			{ id: 2, type: 'urgent', value: 'New resume available' },
			{ id: 3, type: 'default', html: getLatestNotification() },
			{ id: 4, type: 'default', value: 'Foo' },
		];

		const wrapper = shallow(
			<Notifications
				displayDrawer={true}
				listNotifications={listNotifications}
			/>
		);

		expect(wrapper.instance().shouldComponentUpdate(newListNotifications)).toBe(
			true
		);
	});
});	
