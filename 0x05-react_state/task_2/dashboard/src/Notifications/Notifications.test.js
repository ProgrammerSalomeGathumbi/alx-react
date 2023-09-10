import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
	StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
	StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});
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
	it("verify that clicking on the menu item calls handleDisplayDrawer", () => {
            const handleDisplayDrawer = jest.fn();
            const handleHideDrawer = jest.fn();

            const wrapper = shallow(<Notifications handleDisplayDrawer={handleDisplayDrawer} handleHideDrawer={handleHideDrawer} />);

            wrapper.find("div").at(0).simulate("click");

            expect(handleDisplayDrawer).toHaveBeenCalled();
            expect(handleHideDrawer).not.toHaveBeenCalled();

            jest.restoreAllMocks();
        });

        it("verify that clicking on the button calls handleHideDrawer", () => {
            const handleDisplayDrawer = jest.fn();
            const handleHideDrawer = jest.fn();

            const wrapper = shallow(<Notifications displayDrawer handleDisplayDrawer={handleDisplayDrawer} handleHideDrawer={handleHideDrawer} />);

            wrapper.find("button").at(0).simulate("click");

            expect(handleDisplayDrawer).not.toHaveBeenCalled();
            expect(handleHideDrawer).toHaveBeenCalled();

            jest.restoreAllMocks();
        });
});	
