import React from 'react';
import Tilt from 'react-tilt';
import Icon from '../images/Logo.png';
import '../styles/Logo.scss';

const Logo = () => {
    return (
        <Tilt className="logo" options={{max:55}}>
            <div className="Tilt-inner">
                <img src={Icon} alt="Logo" className='logo__img'/>
            </div>
        </Tilt>
    )
}

export default Logo;