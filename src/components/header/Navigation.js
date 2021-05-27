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
          <NavBar>
            <NavItem><a>Insights</a></NavItem>
            <NavItem><a>Work</a></NavItem>
            <NavItem><a>Services</a></NavItem>
            <NavItem><a>About</a></NavItem>
          </NavBar>
        </div>
      </div>


    </NavWrapper>
  )
}

export default Navigation;
