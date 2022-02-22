import React from 'react';
import h from './Header.module.css';

const Header = () => {
  return (
    <header className={h.header}>
      <img
        src="https://icon-library.com/images/instagram-icon-24x24/instagram-icon-24x24-21.jpg"
        alt="instagram"
      />
    </header>
  );
};

export default Header;
