import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import Signup from './components/Auth/Signup/Signup';

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route path="/signup" component={Signup} />
        <Route path="/cart" component={ShoppingCart} />
        <Route path="/" component={Home} />
      </Switch>
    </React.Fragment>
  );
};

export default App;
