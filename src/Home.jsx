import React, { Component } from 'react';
import MenuItem from './MenuItem';
class Home extends Component {
    render() {
        return (
            <div>
                <MenuItem img="/assets/southwest-chicken-resized.jpg" title="Southwestern Wrap" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." price="$13.99"/>
                <MenuItem img="/assets/beef-tacos-resized.jpg" title="Beef Tacos" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." price="$13.99"/>
                <MenuItem img="/assets/tacos-resized.jpg" title="Chicken Tacos" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." price="$13.99"/>
                <MenuItem img="/assets/carnitas-resized.jpg" title="Carnitas" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." price="$13.99"/>
                <MenuItem img="/assets/Nachos1-resized.jpg" title="Nachos" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." price="$13.99"/>
                <MenuItem img="/assets/mexico-burger1-resized.jpg" title="Mexico Burger" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." price="$13.99"/>
            </div>
        );
    }
}

export default Home;