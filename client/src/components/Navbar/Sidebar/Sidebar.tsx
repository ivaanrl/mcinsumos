import React from 'react';
import './Sidebar.scss';
import { useSelector, useDispatch } from 'react-redux';
import { StoreState } from '../../../reducers';
import allActions from '../../../actions';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const showSidebar = useSelector((state: StoreState) => state.sidebar);

  const dispatch = useDispatch();

  let sidebarClass;
  let key;
  if (showSidebar === true) {
    sidebarClass = 'sidebar shown';
    key = 'show';
  } else if (showSidebar === false) {
    sidebarClass = 'sidebar hidden';
    key = 'hide';
  } else {
    sidebarClass = 'sidebar';
    key = 'hide';
  }

  return (
    <div className={sidebarClass} key={key}>
      <div
        className="hamburger-sidebar"
        onClick={() => dispatch(allActions.switchSidebar())}
      >
        <div className="hamburger-sidebar-line"></div>
        <div className="hamburger-sidebar-line"></div>
        <div className="hamburger-sidebar-line"></div>
      </div>
      <div className="sidebar-items">
        <Link to="/" className="sidebar-item">
          Home
        </Link>
        <Link to="/cart" className="sidebar-item">
          Shopping Cart
        </Link>
        <Link to="/contact" className="sidebar-item">
          Contact
        </Link>
        <Link to="/" className="sidebar-item">
          Sign in
        </Link>
        <Link to="/" className="sidebar-item">
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
