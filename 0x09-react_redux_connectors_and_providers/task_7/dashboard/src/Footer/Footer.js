import React from 'react';
import './Footer.css';
import { getFullYear, getFooterCopy } from '../utils/utils'; 
import { AppContext } from '../App/AppContext';
import { connect } from 'react-redux';

const Footer = () => {
    return(
    <div className='footer'>
      {isLoggedIn && (
        <p><a>Contact us</a></p>
      )}
      <div className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.uiReducer.isLoggedIn,
  };
};

export default connect(mapStateToProps)(Footer);
