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
    color: var(--text-color);
    font-family: var(--font-serif) Verdana, Geneva, Tahoma, sans-serif;
  }
  
  .page-scrolled {
    border-bottom: .8px solid rgba(138, 185, 51, .4);
    box-shadow: 0 2px 8px 0 rgb(0 0 0 / 10%);
    background-color: #fff;
    height: 3rem;
    transition: height .781s;
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
    margin: 0 auto;
    width: 94%;
    background-color: inherit;

    @media only screen and (max-width: 1000px) {
      width: 100%;
    }
  }

  .nav-bar {

    ul {
      display: flex;
      width: auto;
      flex-direction: row;
      list-style-type: none;
      align-items: center;
      margin: 0;
      padding: 0;
      overflow: hidden;
      width: 100%;
      
      .nav-list {
        color: yellow;
        
      }

      @media only screen and (max-width: 1200px) {
        display: none;
      }

      li {
        width: 60px;
        padding: 0 1.5rem;
        font-weight: 500;
        color: inherit;
        
        :last-child {
          display: flex;
          justify-content: center;
          align-items: center;
          align-self: center;
          background: var(--primary-color1);
          color: var(--white-two);
          border-radius: 2px;
          height: 2.46503rem;
          transition: all .5s ease-out;
          
          :hover, :active {
            border: 1px solid var(--hover);
            color: var(--hover);
            background-color: inherit;
          }
        }

        .invert-link {
          color: #333;

          :link {
            color: var(--text-inverse);
          }
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
          
          :hover {
            position: relative;
            overflow: hidden;
            color: var(--text-hover);
            text-decoration: none;
          }
            transition: .3s;

          :active {
            color: blue;
            background-color: var(--primary-color1);
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
