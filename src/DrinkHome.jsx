import React, { Component } from 'react';
import MenuItem from './MenuItem';

class DrinkHome extends Component {
    render() {
        return (
            <div>
                <MenuItem img="/assets/margarita-resized.jpg" title="Margarita" content="Margarita is made with a combination of Cointreau, lime juice, and tequila." price="$10.00"/>
                <MenuItem img="/assets/michelada-resized.jpg" title="Michelada" content="Michelada prepared with beer as a base, and the addition of lime juice, salt, and assorted spices, hot sauces, and peppers." price="$8.00"/>
                <MenuItem img="/assets/paloma-resized.jpg" title="Paloma" content="A minimalistic, yet elegant cocktail known as Paloma consists of tequila and grapefruit soda such as Fresca or Jarritos, which makes it a perfect combination of sweet and tart. Paloma, which means dove, is one of the most popular Mexican cocktails." price="$10.00"/>
                <MenuItem img="/assets/pulque-resized.jpg" title="Pulque" content="This ancient Mexican drink is produced from fermented sap (aguamiel) of various types of agave. Pulque dates back to the pre-Hispanic era and was initially enjoyed as a ritual drink that was reserved for nobility. It is characterized by its whitish, milky appearance and slightly yeasty flavor." price="$7.00"/>
                <MenuItem img="/assets/rompope-resized.jpg" title="Rompope" content="Latin American version of eggnog goes under the name rompope. The drink is based on a combination of rum or brandy, milk, sugar, and egg yolks" price="$5.00"/>
                <MenuItem img="/assets/resposado-tequila-resized.jpg" title="Resposado Tequila" content="Reposado is a tequila variety that has been aged for a minimum of two, and a maximum of twelve months, usually in French or American oak. This tequila is characterized by a pale golden color and mellow agave flavor." price="$6.00"/>
                <MenuItem img="/assets/blanco-tequila-resized.jpg" title="Blano Tequila" content="Blanco is a clear tequila variety that is usually not matured, and it is never colored. Soon after distillation, it is diluted to drinking strength, and it is then immediately bottled. This tequila shows a true agave character." price="$6.00"/>
            </div>
        );
    }
}

export default DrinkHome;