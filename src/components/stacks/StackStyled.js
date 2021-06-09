import {
  HeadingPrimary,
} from 'AppStyled';
import styled from 'styled-components';

export const StackWrap = styled.div`
  margin-bottom: 4rem;

  .stack-wrap {
    margin: 0 auto;
    width: auto;
    width: 90%;
    padding: 4rem 0;

    @media only screen and (min-width: 767px){
      margin-left: auto;
      margin-right: auto;
      max-width: 75rem;
      padding: 0.34rem 0.78009rem;
    }
  }

  h3 {
    ${HeadingPrimary}
    margin: 1.783rem auto;

    @media only screen and (min-width: 1200px) {

    }
  }

  .tech-list {
    /* margin-bottom: 2rem;
    border: 1px solid gold; */
  }

  ul {
    flex-flow: row wrap;
    display: flex;
    list-style-type: none;
    justify-content: center;
  }

`

export const StacksNav = styled.div`

  .stacks-nav {
    width: 100%;
    margin: 0 auto;
    margin-bottom: 2rem;

    ul {
      align-items: flex-start;
    }

    ul li {
      margin: 0 1rem 0.231rem 0;
      padding: 0.2183rem 0.87626rem; 
      font-size: 1.10349rem;
      font-weight: 500;
      color: #1d3030;
      border-radius: 3px;

      :last-child {
        background: #862020;
        color: #fff;   
      }
    }
  }


`

export const TechList = styled.div`

  .tech-list {
    margin: 1rem auto;
    /* width: 90%; */
    padding: 0  15px;

    ul {
      justify-content: flex-start;
      align-items: center;
      margin: 0 -1rem;
      padding: 0;
    }

    ul li {
      /* border: 1px solid green; */
      margin: 0 1rem;
      margin-bottom: 15px;
    }
  }

  .icon-stack {
    @media only screen and (min-width: 1034px) {
      /* height: 55px; */
    }
  }

`
