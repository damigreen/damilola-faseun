import styled from 'styled-components'
import {
  borderStyle, flexColumnWrap,
  flexRowWrap,
  HeadingPrimary,
  HeadingSecondary,
  HeadingTertiary,
} from '../../AppStyled';


export const ProjectWrap = styled.div`

  .project-wrap {
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: flex-start;
    /* align-items: center; */
    flex-wrap: wrap;
    padding: 1.415rem;
    width: auto;

    @media only screen and (min-width: 767px) {
      /* flex-flow: row wrap; */

    }
  }

  .project {
    width: auto;
    height: auto;
  }


`

export const ProjectWrapLeft = styled.div`

`

export const ProjectWrapRight = styled.div`
`

export const ImageWrap = styled.div`
    width: 100%;
    height: auto;

    @media only screen and (min-width: 767px){
      width: auto;
      height: auto;
    }

  .image-wrap {
  }
`

export const TextWrap = styled.div`
  width: 100%;
  max-width: 420px;
  border: 1px solid green;
  
  .project-title {

  }

  .project-category {

  }
`


export const PortfolioWrap = styled.div`
  border: 1px solid green;
  margin: 0;
  padding: 0;


  .portfolio-wrap {
    ${flexColumnWrap};
    justify-content: flex-start;
    margin: 0 auto;
    width: 100%;
    max-width: 90rem;

  }

  .portfolio-heading {
    ${flexColumnWrap};
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: 2rem;
    width:80%;
    margin-bottom: 1.07622rem;

    h3, h4 {
      text-align: left;
      /* padding-left: 1.06345rem;
      padding-right: 1.06345rem; */
      /* padding-left: 1.34rem; */

    }

    h3 {
      ${HeadingPrimary};
    }

    h4 {
      ${HeadingSecondary};
    }

    p {
      ${HeadingTertiary};
      padding-left: 1.06345rem;
      padding-right: 1.06345rem;
    }

  }

  .filter {
    width: 80%;
    position: relative;
    border: 2px solid rgb(242, 242, 242);

  }

  .filter-box {
    appearance: none;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    text-transform: uppercase;
    border-top: none;
    border-right: none;
    border-left: none;
    border-image: initial;
    border-bottom: 1px solid rgb(242, 242, 242);
    padding: 0.89rem 1.2rem;
    font-size: 0.625rem;
    font-weight: 600;
    letter-spacing: 0.125rem;
    text-align: left;
    color: #1F2F3B;

    @media only screen and (min-width: 767px){
      display: none;
    }

    .filter-by {

    }

    .filter-button {

      img {
        height: 16px;
        width: 16px;
      }
    }
  }

  .project-filter {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin: 0 1.02rem;
    padding: 0.711rem 0.5424rem;
    width:90%;

    @media only screen and (min-width: 767px){
      all: unset;
    }

    div {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      width: 100%;
      height: 2.9rem;
      border-bottom: 1px solid rgb(242, 242, 242);


      :last-child {
        border-bottom: none;
      }

      @media only screen and (min-width: 767px){
        all: unset;
      }
    }


    span {
      display: inline-block;
      width: 1rem;
      height: 1rem;
      background-color: rgb(255, 255, 255);
      border: 1px solid rgb(242, 242, 242);

      @media only screen and (min-width: 767px){
        all: unset;
      }
    }

    .filter-name {
      padding: 1rem;
      margin-top: 1.2rem;

      @media only screen and (min-width: 767px){
        all: unset;
      }
    }
  }

  .project-filter .large {

    @media only screen and (min-width: 767px){
      display: block;
      flex-flow: row wrap;
    }
  }


  .project-div {
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: flex-start;
    /* align-items: center; */
    flex-wrap: wrap;

    @media only screen and (min-width: 767px) {
      /* width: auto;
      height: auto; */
      flex-flow: row wrap;
      flex: 0 0 40%;

    }
  }
`

