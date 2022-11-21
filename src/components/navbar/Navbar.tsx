import React from 'react';
import './navbar.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className='navbar'>
      <Link to='/'>
        <span>simula</span>cr.
      </Link>
    </header>
  );
};

export default Navbar;
