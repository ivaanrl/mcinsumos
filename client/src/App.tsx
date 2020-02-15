import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';

const App = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/cart" component={ShoppingCart} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
};

export default App;
