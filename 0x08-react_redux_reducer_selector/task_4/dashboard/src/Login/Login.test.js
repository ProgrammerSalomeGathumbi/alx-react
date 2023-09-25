import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
	StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
	StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('Login', () => {
  it('renders without crashing', () => {
    shallow(<Login />);
  });

  it('renders 2 input tags and 2 label tags', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input')).toHaveLength(2);
    expect(wrapper.find('label')).toHaveLength(2);
  });
describe('test for submit input on form', () => {
  it('should be disabled by default', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('.yellowBorder_1sbjbp4').props().disabled).toBe(true);
  });

  it('should be enabled when password and email have value', () => {
    const wrapper = shallow(<Login />);
    const email = {
          target: {
		name: 'email',
		value: 'email',
		},
	  };
    const password = {
	  target: {
		name: 'password',
		value: 'password',
		},
	  };

    wrapper.find({ name: 'email' }).simulate('change', email);
    wrapper.find({ name: 'password' }).simulate('change', password);
    expect(wrapper.find('.button').prop('disabled')).toBe(false);
  });  
});
