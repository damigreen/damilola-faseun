import React, { useEffect } from 'react';
import {
  NavWrapper,
} from './NavigationStyled';
import { Link } from 'react-router-dom';



function Navigation() {
  
  return (
    <NavWrapper>
      <div className="nav-main">
        <div className="nav-wrapper">
          <Link to='/' style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', textDecoration: 'none'}}>
            <img className="logo-box" src={`../../../icons/logo1.png`} alt="website logo" /><span className="logo-span" style={{color: '#D44B31', fontSize: '2rem', marginLeft: '0.6731rem', fontWeight: '500'}}>tech</span>
          </Link>


          <div className="nav-bar">
            <ul className="nav-list">
              <li><a className="nav-link" href="/#about">About</a></li>
              <li><a className="nav-link" href="/#services">Services</a></li>
              <li><a className="nav-link" href="/#portfolio">Work</a></li>
              <li><a className="nav-link insight" href="/#portfolio">Insights</a></li>
            </ul>
          </div>

          <div className="nav-filter"></div>
        </div>

      </div>
    </NavWrapper>
  )
}

export default Navigation;
