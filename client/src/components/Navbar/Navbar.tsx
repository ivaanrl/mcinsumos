import React from 'react';
import logo from '../../assets/logo/mcinsumosLogo.png';
import './Navbar.scss';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar/Sidebar';
import { useDispatch } from 'react-redux';
import allActions from '../../actions';

const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <Sidebar />
      <div className="navbar">
        <div
          className="hamburger"
          onClick={() => dispatch(allActions.switchSidebar())}
        >
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
        </div>
        <div className="logo-container">
          <img src={logo} alt="Mc Insumo Logo" className="logo" />
        </div>
        <div className="nav-links">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/cart" className="nav-link">
            Shopping Cart
          </Link>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
          <Link to="/signin" className="nav-link">
            Sign in
          </Link>
          <Link to="/signup" className="nav-link">
            Sign up
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
