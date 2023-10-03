import React from 'react';
import { StyleSheetTestUtils } from 'aphrodite';
import Notifications from './Notifications';
import { getLatestNotification } from '../utils/utils';
import { shallow } from 'enzyme';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('rendering components', () => {
  it('renders Notifications component without crashing', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders an unordered list', () => {
    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'default', html: getLatestNotification() },
    ];
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    const notificationItems = wrapper.find('NotificationItem');
    expect(notificationItems).toHaveLength(3);
  });

  it('renders the right HTML for each notification item', () => {
    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'default', html: getLatestNotification() },
    ];
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    const notificationItems = wrapper.find('ul').children();

    expect(notificationItems.at(0).html()).toEqual('<li data-notification-type="default">New course available</li>');
    expect(notificationItems.at(1).html()).toEqual('<li data-notification-type="urgent">New resume available</li>');
    expect(notificationItems.at(2).html()).toEqual(`<li data-urgent="true">${getLatestNotification()}</li>`);
  });

  it('renders the text "Here is the list of notifications"', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('.center_14klam').text()).toBe('Here is the list of notifications');
  });

  it('check that the menu item is being displayed when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications />);
    const re = /menuItem.*/gm;
    expect(wrapper.find('.menuItem_1ba569s-o_O-hover_1f7q9uc').hasClass(re)).toEqual(true);
  });

  it('check that the div.Notifications is not being displayed when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('.Notifications_pbqhv6-o_O-noBorder_5s9902').exists()).toEqual(false);
  });

  it('check that the menu item is not being displayed when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('.menuItem_1ba569s-o_O-hover_1f7q9uc').exists()).toEqual(false);
  });

  it('check that the div.Notifications is being displayed when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('.Notifications_pbqhv6-o_O-noBorder_5s9902').exists()).toEqual(true);
  });

  it('checks Notifications renders correctly if passed an empty array or listNotifications not passed', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={[]} />);
    expect(wrapper.find('ul').childAt(0).html()).toEqual('<li data-notification-type="default" class="default_peoly4">No new notification for now</li>');
  });

  it('checks when markAsRead called, console.log called with `Notification ${id} has been marked as read`', () => {
    const wrapper = shallow(<Notifications />);
    const spy = jest.spyOn(console, 'log').mockImplementation();
    wrapper.instance().markAsRead(1);
    expect(spy).toBeCalledTimes(1);
    expect(spy).toBeCalledWith('Notification 1 has been marked as read');
    spy.mockRestore();
  });

  it('should call handleDisplayDrawer when menu item clicked', () => {
    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'default', html: getLatestNotification() },
    ];
    const mockFn = jest.fn();
    const wrapper = shallow(<Notifications listNotifications={listNotifications} handleDisplayDrawer={mockFn} />);
    wrapper.find('.menuItem_1ba569s-o_O-hover_1f7q9uc').simulate('click');
    expect(mockFn).toBeCalled();
  });

  it('should call handleHideDrawer when close button is clicked', () => {
    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'default', html: getLatestNotification() },
    ];
    const mockFn = jest.fn();
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} handleHideDrawer={mockFn} />);
    wrapper.find('button').simulate('click');
    expect(mockFn).toBeCalled();
  });

  it('clicking on the first button should call setNotificationFilter with URGENT', () => {
    const setFilterMock = jest.fn();
    const wrapper = shallow(<Notifications setFilterUrgent={setFilterMock} />);
    wrapper.find('button').at(0).simulate('click');
    expect(setFilterMock).toHaveBeenCalledWith('URGENT');
  });

  it('clicking on the second button should call setNotificationFilter with DEFAULT', () => {
    const setFilterMock = jest.fn();
    const wrapper = shallow(<Notifications setFilterDefault={setFilterMock} />);
    wrapper.find('button').at(1).simulate('click');
    expect(setFilterMock).toHaveBeenCalledWith('DEFAULT');
  });
});
