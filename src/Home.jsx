import React, { Component } from 'react';
import MenuItem from './MenuItem';

class Home extends Component {
    render() {
        return (
            <div>
                <MenuItem img="/assets/southwest-chicken.jpg" title="Southwestern Wrap" content="Lorem Ipsum" price="$13.99"/>
                <MenuItem img="/assets/southwest-chicken.jpg" title="Southwestern Wrap" content="Lorem Ipsum" price="$13.99"/>
                <MenuItem img="/assets/southwest-chicken.jpg" title="Southwestern Wrap" content="Lorem Ipsum" price="$13.99"/>
            </div>
        );
    }
}

export default Home;