import React from 'react';
import './Footer.css';
import { getFullYear, getFooterCopy } from '../utils/utils'; 
import { AppContext } from '../App/AppContext';

const Footer = () => {
    return(
        <AppContext.Consumer>
        {({ user: { email, password, isLoggedIn }, logOut }) => (
	<div className='footer'>
        {isLoggedIn && (
	<p><a>Contact us</a></p>
	)}
        <div className="App-footer">
	<p>Copyright {getFullYear()} - {getFooterCopy()}</p>
	</div>
	</div>
	)}
      </AppContext.Consumer>   
    );
}

export default Footer;
