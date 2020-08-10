import React, { Component } from 'react';
import './Navigation.scss'
class Navigation extends Component {
    render() {
        return (
            <div className="Navigation">
                <button className='Food'>Food</button>
                <p>This is where the navigation between different pages will be</p>
                <button className='Drinks'>Drinks</button>
            </div>
        );
    }
}

export default Navigation;