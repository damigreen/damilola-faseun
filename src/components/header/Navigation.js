import React from 'react';
import {
  NavWrapper,
  NavBar,
  NavItem,

} from './NavigationStyled';

function Navigation() {

  return (
    <NavWrapper>
      <div className="nav-wrapper">
        <div className="logo-box"></div>

        <div className="nav-filter">FILTER</div>

        <div className="nav-bar">
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Work</a></li>
            <li><a href="#portfolio">Insights</a></li>
          </ul>
        </div>
      </div>
    </NavWrapper>
  )
}

export default Navigation;
