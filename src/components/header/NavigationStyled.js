import styled from 'styled-components';


export const NavWrapper = styled.div`
  /* background-color: brown; */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 88px;
  z-index: 10;

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
    /* border: 1px solid gold; */

    ul {
      /* border: 1px solid red; */
      display: flex;
      width: auto;
      flex-direction: row;
      list-style-type: none;
      margin: 0;
      padding: 0;
      overflow: hidden;
      width: 100%;

      @media only screen and (max-width: 1200px) {
        display: none;
      }

      li {
        width: 45px;
        padding: 0 1.5rem;
        /* float: right; */
        font-weight: 500;


        a {
          padding: 0;
          margin: 0;
          color: #fff;
  
          :link {
            color: #fff;
            text-decoration: none;
          }

          :visited {
            background-color: #862020;
          }

          :hover {
            border-bottom: 1px solid gold;
            position: relative;
            /* overflow:hidden; */
            transition: .3s;
          }

          :active {
            color: blue;
            border-bottom: 1px solid gold;  
          }
        }    
      }
    }
  }
`
