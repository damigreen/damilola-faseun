import React from 'react';
import styled from 'styled-components';

const NavWrapper = styled.div`
  /* background-color: brown; */
  height: 90px;
  padding: 5px;
  border: 1px solid brown;
`

const NavBar = styled.div`
  /* margin: 0 auto; */
  /* background-color: yellow; */
  height: 90px;
  border: 1px solid brown;
  width: 700px;
  float: right;
  
  `

const NavItem = styled.a`
  border: 1px solid brown;
  color: blue;
  width: 45px;
  padding-right: 10px;
`

function Navigation() {

  return (
    <NavWrapper>
      <NavBar>
        <NavItem>Work</NavItem>
        <NavItem>Profile</NavItem>
        <NavItem>Contact me</NavItem>
      </NavBar>
    </NavWrapper>
  )
}

export default Navigation;
