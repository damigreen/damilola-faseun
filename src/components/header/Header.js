import React from 'react';
import Navigation from './Navigation';
import './Header.scss';
import styled, { css } from 'styled-components';


const HeaderWrap = styled.div`
  // background-color: #021D44;
  color: #EEEEEF;
  height: 700px;
  
`
const HeroWrap = styled.div`
  position: absolute;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;
  background-color: yellow;  

  background: conic-gradient(from 163.17deg at 50% 50%, rgba(72, 73, 86, 0.73) 0deg, rgba(47, 79, 79, 0.502145) 180.62deg, rgba(94, 215, 215, 0.456489) 232.5deg, rgba(47, 79, 79, 0.258928) 277.18deg, rgba(59, 67, 73, 0.158272) 309.38deg, rgba(180, 46, 110, 0) 360deg), #191A1D;
  background-blend-mode: soft-light, normal;
  border: 1px solid rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
`


function Header() {

  return (
    <HeaderWrap>
      <Navigation />
      <HeroWrap>
        <h1>Damilola Faseun</h1>
        <h1>Full Stack Developer</h1>

        <div>
          <h2>_Stacks</h2>
          <p>React </p>
        </div>
      </HeroWrap>
    </HeaderWrap>
  )
}

export default Header;
