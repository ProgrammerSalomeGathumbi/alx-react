import React from 'react';
import { shallow } from 'enzyme';
import BodySection from './BodySection';

describe('BodySection Component', () => {
   it('should render correctly with title and children', () => {
     const wrapper = shallow(
       <BodySection title="test title">
          <p>test children node</p>
       </BodySection> );

     expect(wrapper.exists()).toBe(true);
     expect(wrapper.exists('h2')).toBe(true);
     expect(wrapper.exists('p')).toBe(true);
     expect(wrapper.find('h2').text()).toEqual('test title');
     expect(wrapper.find('p').text()).toEqual('test children node');     
   });		
}); 
