import React from 'react';
import styled from 'styled-components';

const NavWrapper = styled.div`
  /* background-color: brown; */
  height: 90px;
  padding: 5px;
`

const NavBar = styled.ul`
  height: 90px;
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;

`

const NavItem = styled.li`
  color: red;
  width: 45px;
  padding-right: 10px;
  float: right;
`

function Navigation() {

  return (
    <NavWrapper>
      <NavBar>
        <NavItem><a>About</a></NavItem>
        <NavItem><a>Services</a></NavItem>
        <NavItem><a>Work</a></NavItem>
        <NavItem><a>Contact</a></NavItem>
        <NavItem><a>Blogs</a></NavItem>
      </NavBar>
    </NavWrapper>
  )
}

export default Navigation;
