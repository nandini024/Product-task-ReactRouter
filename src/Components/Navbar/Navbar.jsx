import React from "react";

import { Link } from 'react-router-dom';
import "./Navbar.css"
const Navbar = () => {
  return (
    <div>
      <div className="Navbar">
        <div id="Navbar-left">Nandini Software Solutions</div>

        <div id="Navbar-right"> 
          <Link id='link' to="/home">
            
            <span>HOME</span>
          </Link>

          <Link id='link' to="/about">
            <span>ABOUT</span>
          </Link>

          <Link id='link' to='/contact'> 
            <span>CONTACT </span>
          </Link>
          <Link id='link' to='/Products'> 
            <span>Products</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
