import React from 'react';
import Navigation from './Navigation';
import './Header.scss';
import styled, { css } from 'styled-components';


const HeaderWrap = styled.div`
  background-color: #021D44;
  color: #EEEEEF;
  height: 700px;
  
`

function Header() {

  return (
    <HeaderWrap>
      <Navigation />
      <h1>Damilola Faseun</h1>
      <h1>Full Stack Developer</h1>
    </HeaderWrap>
  )
}

export default Header;
