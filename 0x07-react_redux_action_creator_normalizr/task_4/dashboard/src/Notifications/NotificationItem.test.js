import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
	StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
	StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('NotificationItem component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<NotificationItem />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correct html when type and value props are passed', () => {
    const wrapper = shallow(<NotificationItem type="default" value="test" />);
    const liElement = wrapper.find('li[data-notification-type="default"]');
    expect(liElement).toHaveLength(1);
    expect(liElement.text()).toEqual('test');
  });

  it('renders correct html when html prop is passed', () => {
    const html = '<u>test</u>';
    const wrapper = shallow(<NotificationItem html={{ __html: html }} />);
    const liElement = wrapper.find('li[data-urgent]');
    expect(liElement).toHaveLength(1);
    expect(liElement.html()).toEqual(`<li data-urgent>${html}</li>`);
  });
  it('will pass a spy as the markAsRead property', () => {
    const wrapper = shallow(<NotificationItem />);
    const spy = jest.fn();
    wrapper.setProps({value: 'test item', markAsRead: spy, id: 1});
    wrapper.find('li').props().onClick();
    expect(spy).toBeCalledTimes(1);
    expect(spy).toBeCalledWith(1);
    spy.mockRestore();    
    });
});
