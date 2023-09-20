import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';
import { StyleSheetTestUtils } from 'aphrodite';
import { AppContext, defaultUser, defaultLogout } from '../App/AppContext';

beforeEach(() => {
	StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
	StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('Header', () => {
  it('renders without crashing', () => {
    shallow(<Header />);
  });

  it('renders img and h1 tags', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('img')).toHaveLength(1);
    expect(wrapper.find('h1')).toHaveLength(1);
  });
  it('mounts with default context value and not create logoutSection', () => {
	const wrapper = mount(
	<AppContext.Provider value={{ user: defaultUser, logout: defaultLogout }}>
	<Header />
	</AppContext.Provider>
	);

	expect(wrapper.find('img')).toHaveLength(1);
	expect(wrapper.find('h1')).toHaveLength(1);
	expect(wrapper.find('#logoutSection').exists()).toBe(false);
	});

  it('should mount with defined user and create logoutSection', () => {
	const dummy = {
	email: 'sal@gmail.com',
	password: 'pass123',
	isLoggedIn: true,
	};
	const wrapper = mount(
	<AppContext.Provider value={{ user: dummy, logout: defaultLogout }}>
	<Header />
	</AppContext.Provider>
	);

	expect(wrapper.find('img')).toHaveLength(1);
	expect(wrapper.find('h1')).toHaveLength(1);
	expect(wrapper.find('#logoutSection').exists()).toBe(true);
	});

it('should mount with defined user and call logOut when link is clicked', () => {
	const testData = {
	user: {
	email: 'sal@gmail.com',
	password: 'pass123',
	isLoggedIn: true,
			},
			logOut: () => {},
		};
	const spy = jest.spyOn(testData, 'logOut');
	const wrapper = mount(
	<AppContext.Provider value={testData}>
	<Header />
	</AppContext.Provider>
	);
	wrapper.find('#logoutSection a').simulate('click');
	expect(spy).toHaveBeenCalled();
	spy.mockRestore();
	});
});
