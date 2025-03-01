import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <>
    <nav className="navbar">
      <a href="/">
        <img className="navLogo" src="../../icons/logo.png" alt="" />
        {' '}
      </a>
      <ul className="nav-links">
        <li><NavLink to="/">Rockets</NavLink></li>
        <li className="missionNav"><NavLink to="/missions">Missions</NavLink></li>
        <li><NavLink to="/my-profile">My Profile</NavLink></li>
      </ul>
    </nav>
    <h3 className="title">Space Travelers&apos; Hub</h3>
  </>
);

export default Navbar;
