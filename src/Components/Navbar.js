// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Assests/knifeFork.png';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import '../styles/Navbar.css';

function Navbar({ cartItems }) {
  return (
    <div className="navbar">
      <div className="leftSide">
        <img src={Logo} alt="Logo" />
        <div className="hiddenLinks">
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">About</Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        {/* Lien vers le panier */}
        <Link to="/cart" className="cartLink">
          <ShoppingCartIcon />
          {cartItems.length > 0 && (
            <span className="cartCount">{cartItems.length}</span>
          )}
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
