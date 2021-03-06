import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Home from './Home';
import Footer from './Footer';
import Header from './Header';
import Navigation from './Navigation';
import DrinkHome from './DrinkHome';

import './App.css';

function App() {
  return (
    
    <div className='App'>
    <Header/>
    <Navigation/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/drinks" component={DrinkHome}/>
      </Switch>
    <Footer/>
    </div>
  );
}

export default App;
