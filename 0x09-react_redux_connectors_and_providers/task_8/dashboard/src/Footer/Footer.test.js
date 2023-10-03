import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';
import { AppContext } from '../App/AppContext';

describe('Footer', () => {
  it('renders without crashing', () => {
    shallow(<Footer />);
  });

  it('renders at least the text "Copyright"', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.text()).toContain('Copyright');
  });
  it('only renders link when user is logged in', () => {
		const testData = {
			user: { email: 'fred@gmail.com', password: 'pass123', isLoggedIn: true },
			logOut: () => {},
		};
		const wrapper = mount(
			<AppContext.Provider value={testData}>
				<Footer />
			</AppContext.Provider>
		);

		expect(wrapper.find('.footer a').exists()).toBe(true);
	});

	it('does not render link when user is logged out', () => {
		const testData = {
			user: { email: 'fred@gmail.com', password: 'pass123', isLoggedIn: false },
			logOut: () => {},
		};
		const wrapper = mount(
			<AppContext.Provider value={testData}>
				<Footer />
			</AppContext.Provider>
		);

		expect(wrapper.find('.footer a').exists()).toBe(false);
	});
});
