import React, { Component } from 'react';
import './Footer.scss';
class Footer extends Component {
    render() {
        return (
            <div className="Footer">
                <p>This webpage is created as sample for touchless menus</p>
                <div className="Footer-Spacer"/>
                <p>WebAmbrosia LLC 2020 © </p>
                <div className="Footer-Spacer"/>
            </div>
        );
    }
}

export default Footer;