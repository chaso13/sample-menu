import React, { Component } from 'react';
import './Header.scss';

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <img className='Logo' src={'/assets/logo_transparent1.png'} alt='Casa de Ambrosia Logo'/>
            </div>
        );
    }
}

export default Header;