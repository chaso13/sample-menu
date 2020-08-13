import React, { Component } from 'react';
import { NavLink} from 'react-router-dom';
import './Navigation.scss'
class Navigation extends Component {
    render() {
        return (
            <div className="Navigation">
                
                <NavLink
                    to="/"
                    exact={true}
                    activeClassName='Active-Button'
                >
                    <button className='Button'>FOOD</button>
                </NavLink>
                <NavLink 
                    to="/drinks"
                    activeClassName='Active-Button'
                >
                    <button className='Button'>DRINKS</button>
                </NavLink>
    
            </div>
        );
    }
}

export default Navigation;