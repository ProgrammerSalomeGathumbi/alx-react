import React from 'react';
import { shallow } from 'enzyme';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import BodySection from './BodySection';

describe('BodySectionWithMarginBottom Component', () => {
  it('renders correctly a BodySection component and that the props are passed correctly to the child component', () => {
   const wrapper = shallow(<BodySectionWithMarginBottom title={title}>
        {children}
      </BodySectionWithMarginBottom>);

   expect (wrapper.find(BodySection)).exists()).toBe(true);
   expect (wrapper.find(BodySection)).prop('title')).toEqual('test title');
   expect (wrapper.find(BodySection)).contains(<p>test children node</p>).toBe(true);
 });		
});
