import React, { useEffect } from 'react';
import {
  NavWrapper,
  NavBar,
  NavItem,

} from './NavigationStyled';

function Navigation() {
  
  return (
    <NavWrapper>
      <div className="nav-main">
        <div className="nav-wrapper">
          <div className="logo-box">LOGO</div>


          <div className="nav-bar">
            <ul>
              <li><a className="nav-link" href="#about">About</a></li>
              <li><a className="nav-link" href="#services">Services</a></li>
              <li><a className="nav-link" href="#portfolio">Work</a></li>
              <li><a className="nav-link" href="#portfolio">Insights</a></li>
            </ul>
          </div>

          <div className="nav-filter">FILTER</div>
        </div>

      </div>
    </NavWrapper>
  )
}

export default Navigation;
