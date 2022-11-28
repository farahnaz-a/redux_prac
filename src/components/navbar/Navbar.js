import React from 'react'
import './navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
         <ul>
              <li>
                <NavLink to="/">
                    Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about">
                    About
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact">
                    Contact
                </NavLink>
              </li>
              <li>
                <NavLink to="/counter">
                    Counter
                </NavLink>
              </li>
        </ul>

    </div>
  )
}

export default Navbar
