import React from 'react';
import n from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={n.nav}>
      <div className={`${n.item} + ${n.active}`}>
        <a href="#s">Profile</a>
      </div>
      <div className={n.item}>
        <a href="#s">Messages</a>
      </div>
      <div className={n.item}>
        <a href="#s">News</a>
      </div>
      <div className={n.item}>
        <a href="#s">Music</a>
      </div>
      <div className={n.item}>
        <a href="#s">Settings</a>
      </div>
    </nav>
  );
};

export default Navbar;
