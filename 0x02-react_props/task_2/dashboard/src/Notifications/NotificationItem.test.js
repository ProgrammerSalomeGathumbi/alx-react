import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

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
});
