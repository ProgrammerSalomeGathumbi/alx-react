import React from 'react';
import PropTypes from 'prop-types';
import './BodySectionWithMarginBottom.css';
import BodySection from './BodySection'; 

class BodySectionWithMarginBottom extends React.Component {
  render () {
  return (
      <div className='bodySectionWithMargin'>
        <BodySection {...this.props} />
      </div>	
     );  
    }
}
BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};
export default BodySectionWithMarginBottom; 
