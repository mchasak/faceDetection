import React from 'react';
import '../styles/Navigation.scss'

const Navigation = ({ onRouteChange, isSignedIn }) => {
    if (isSignedIn) {
        return (
            <div className='navigation'>
                <span onClick={() => onRouteChange('signout')} className='navigation__link'>Sign Out</span>
            </div>
        );
    } else {
        return (
            <div className="navigation">
                <span onClick={() => onRouteChange('signin')} className='navigation__link'>Sing In</span>
                <span onClick={() => onRouteChange('register')} className='navigation__link'>Register</span>
            </div>
        );
    }
    
}

export default Navigation