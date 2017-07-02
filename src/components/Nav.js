import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (
  <ul className="nav">
    <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
    <li><NavLink to="/battle" activeClassName="active">Battle</NavLink></li>
    <li><NavLink to="/popular" activeClassName="active">Popular</NavLink></li>
  </ul>
);

export default Nav;
