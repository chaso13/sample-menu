import React, { Component } from 'react';
import './Navigation.scss'
class Navigation extends Component {
    render() {
        return (
            <div className="Navigation">
                <button className='Food Active-Button'>Food</button>
                
                <button className='Drinks '>Drinks</button>
            </div>
        );
    }
}

export default Navigation;