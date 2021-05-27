import styled from 'styled-components';


export const NavWrapper = styled.div`
  /* background-color: brown; */
  .nav-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 3rem;
    padding: 5px;
    border: 1px solid gold;
  }

  .nav-filter {
    display: none;
    background-color: red;

    @media only screen and (max-width: 1200px) {
      display: block;
      float: right;
    }
  }

  .nav-bar {
    border: 1px solid red;
  }
`

export const NavBar = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  width: 100%;

  @media only screen and (max-width: 1200px) {
    display: none;
  }
`

export const NavItem = styled.li`
  color: #fff;
  width: 45px;
  /* padding-right: 10px; */
  padding: 0 1.5rem;
  float: right;
  font-weight: 500;
  vertical-align: middle;

  /* @media only screen and (max-width: 1200px) {
    display: none;
  } */

  a {
    padding: 0;
    margin: 0;
  }
`
