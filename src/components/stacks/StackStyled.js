import styled from 'styled-components';

export const StackWrap = styled.div`
  border: 1px solid red;

  .stack-wrap {
    margin: 0 auto;
    width: 100%;
    max-width: 80rem;
    padding: 0.34rem 1.989rem;

    @media only screen and (min-width: 767px){
      margin-left: auto;
      margin-right: auto;
      width: 100%;
      max-width: 75rem;
      padding: 0.34rem 0.78009rem;
    }
  }

  h3 {
    font-size: 1.6393456rem;
    font-weight: 700;
    color: #1d3030;
    margin: 1.783rem auto;

    @media only screen and (min-width: 1200px) {
      font-size: 1.79345rem;
    }
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
    width: 90%;

    ul {
      justify-content: space-between;
      align-items: flex-start;
      align-items: center;
    }

    ul li {
      border: 1px solid green;

    }
  }

`
