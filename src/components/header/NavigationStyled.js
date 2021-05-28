import styled from 'styled-components';


export const NavWrapper = styled.div`
  .nav-main {
    --text-color: #fff;
    --background: transparent;
    --text-inverse: #333;
    --text-hover: #B63221;

    display: flex;
    flex-direction: row;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 5rem;
    z-index: 10;
    border: 1px solid gold;
    color: var(--text-color);
  }

  .page-scrolled {
    background-color: #fff;
    height: 3rem;
    color: #333;
  }

  @media only screen and (max-width: 1000px) {
      height: 3rem;
    }

  .nav-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    border: 1px solid green;
    margin: 0 auto;
    width: 94%;
    background-color: inherit;


    @media only screen and (max-width: 1000px) {
      width: 100%;
    }
  }

  
  .nav-bar {
    /* margin-right: 4rem; */

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

        .invert-link {
          color: var(--text-inverse);
        }

        a {
          padding: 0;
          margin: 0;
          color: inherit;
          
          :link {
            /* color: #fff; */
            text-decoration: none;
          }

          :visited {
            background-color: #862020;
          }
          
          /* Make an animated border for the hover state */
          :hover {
            /* border-bottom: 1px solid gold; */
            position: relative;
            overflow: hidden;
            /* color: #B63221; */
            color: var(--text-hover);
            text-decoration: none;
          }
            transition: .3s;

          :active {
            color: blue;
            border-bottom: 1px solid gold;  
          }
        }    
      }
    }
  }

  .nav-filter {
    display: none;
    background-color: red;
    border: 3px solid gold;

    @media only screen and (max-width: 1200px) {
      display: block;
      background-color: green;
      float: right;
      justify-self: last baseline;
      align-self: center;
    }
  }

`
