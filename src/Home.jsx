import React, { Component } from 'react';
import MenuItem from './MenuItem';

class Home extends Component {
    render() {
        return (
            <div>
                

                <MenuItem img="/assets/southwest-chicken-resized.jpg" title="Southwestern Wrap" content="These Southwestern Wraps are packed with nutrition, containing black beans, chicken, spinach, roasted red peppers and a low fat sour cream and blue cheese spread." price="$13"/>
                <MenuItem img="/assets/beef-tacos-resized.jpg" title="Beef Tacos" content="These crispy ground beef tacos are filled with seasoned meat, lettuce, cheese and tomatoes." price="$10"/>
                <MenuItem img="/assets/tacos-resized.jpg" title="Chicken Tacos" content="The warmed tortillas are loaded with juicy, shortcut fiesta shredded chicken then piled with all your favorite toppings from fresh guacamole to vibrant pico de gallo to crunchy lettuce and creamy sour cream" price="$9"/>
                <MenuItem img="/assets/carnitas-resized.jpg" title="Carnitas" content="Do you want the most delicious taco you will ever shove into that beautiful mouth of yours? It’s right here. These Pork Carnitas Tacos are literally the best." price="$12"/>
                <MenuItem img="/assets/Nachos1-resized.jpg" title="Nachos" content="Crispy chips with melted cheese, ground beef, refried beans, and all of your favorite toppings." price="$14"/>
                <MenuItem img="/assets/mexico-burger1-resized.jpg" title="Mexico Burger" content="Loaded with all your favorite flavors – chorizo, ground beef, cilantro, chiles in adobo, queso fresco and cumin." price="$12"/>
            </div>
        );
    }
}

export default Home;