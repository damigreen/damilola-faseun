import React from 'react';
import styled from 'styled-components';

const NavWrapper = styled.div`
  /* background-color: brown; */
  height: 90px;
  padding: 5px;
  border: 1px solid brown;
`

const NavBar = styled.ul`
  /* margin: 0 auto; */
  /* background-color: yellow; */
  height: 90px;
  border: 1px solid brown;
  width: 700px;
  float: right;
`

const NavItem = styled.li`
  border: 1px solid brown;
  color: blue;
  width: 45px;
  padding-right: 10px;
`

function Navigation() {

  return (
    <NavWrapper>
      <NavBar>
        <NavItem><a>Work</a></NavItem>
        <NavItem><a>About</a></NavItem>
        <NavItem><a>Contact</a></NavItem>
      </NavBar>
    </NavWrapper>
  )
}

export default Navigation;
