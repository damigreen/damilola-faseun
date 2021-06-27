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
    flex-wrap: wrap;
    padding: 1.415rem;
    width: auto;

    @media only screen and (min-width: 767px) {

    }
  }

  .project {
    width: auto;
    height: auto;
  }


`

export const ProjectWrapLeft = styled.div`
  a {
    text-decoration: none;
  }
`

export const ProjectWrapRight = styled.div`
  a {
      text-decoration: none;
    }
`

export const ImageWrap = styled.div`
    margin: 0 auto;
    width: 100%;
    height: auto;

    @media only screen and (min-width: 767px){
      width: auto;
      height: auto;
    }

  .image-wrap {
    margin: 0 auto;
    width: 100%;
    height: auto;

      @media only screen and (min-width: 767px){
        width: auto;
        height: auto;
      }
    }

    img {
      margin: 0 auto;
      width: 100%;
      height: auto;

      @media only screen and (min-width: 767px){
        width: auto;
        height: auto;
      }
  }
`

export const TextWrap = styled.div`
  width: 100%;
  max-width: 420px;
  padding: 0 0.78536rem;
  
  .project-title {
    font-size: 1.342652rem;
    line-height: 39px;
    color: #3d5265;
    margin-bottom: 0;
  }

  .project-category {
    color: #808080;
  }
`


export const PortfolioWrap = styled.div`
  margin: 0;
  padding: 0;
  padding: 4rem 0;
  background-color: #EFF0F3;

  .port-nav {
    color: #171717;
  }

  .portfolio-wrap {
    ${flexColumnWrap};
    justify-content: flex-start;
    margin: 0 auto;
    width: 90%;

    @media only screen and (min-width: 991px) {
      max-width: 90rem;
      padding: 31px 3rem;
    }

  .portfolio-header-main {
    align-items: flex-start;
    width: 100%;
    height: auto;
  }

  .portfolio-heading {
    ${flexColumnWrap};
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: 2rem;
    width: auto;
    margin-bottom: 2.20907622rem;


    h3, h4 {
      text-align: left;
      margin: 0;
    }

    h3 {
      ${HeadingPrimary};
      margin-bottom: 0.873rem;
    }

    h4 {
      ${HeadingSecondary};
      margin-top: 0;
    }

    p {
      ${HeadingTertiary};
      padding-left: 1.06345rem;
      padding-right: 1.06345rem;
    }

    @media only screen and (min-width: 767px){
      border: unset;
      margin-left: auto;
      margin-right: auto;
      width: 100%;
      max-width: 75rem;
    }
  }

  .filter-style {
    display: flex;
    flex-direction: column;
  }

  .filter {
    width: 90%;
    position: relative;
    border: 2px solid rgb(242, 242, 242);

    @media only screen and (min-width: 767px){
      border: unset;
      display: flex;
      flex-direction: row;
      border: 1px solid green;
    }
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

    @media only screen and (max-width: 767px){
      border: 1px solid #c4c4c4;
      margin: 0 auto;
      width: 75%;
    }

    .filter-icon {
      height: 16px;
      width: 16px;
      background: url('../../../icons/filter-icon.png');
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      /* border: 1px solid red; */
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
  
  .filter-style {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin: 1rem 1.02rem;
    padding: 0.711rem 0.5424rem;
    /* width:95%; */
  }
  
  .project-filter {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin: 0 1.02rem;
    margin: 0 auto;
    padding: 0.711rem 0.5424rem;
    width:90%;

    @media only screen and (min-width: 767px){
      all: unset;
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      flex-wrap: wrap;
      border: unset;
      width: 100%;
      max-width: 75rem;
      margin-left: auto;
      margin-right: auto;
      width: 80%;
    }

    @media only screen and (max-width: 767px){
      all: unset;
      display: none;
      margin: 0 auto;
      width:81.6893%;
    }

    div {
      display: flex;
      justify-content: flex-start;
      text-transform: uppercase;
      align-items: center;
      font-size: 0.829rem;
      font-weight: 500;
      width: 100%;
      height: 2.9rem;
      border-bottom: 2px solid rgb(242, 242, 242);


      :last-child {
        /* border-bottom: none; */


        @media only screen and (min-width: 767px) {
          /* border-bottom: 2px solid rgb(242, 242, 242); */
        } 
      }

      @media only screen and (min-width: 767px){
        all: unset;
        color: #1d3030;
        text-transform: uppercase;
        font-size: 0.829rem;
        font-weight: 500;
        padding: 0.43rem 0.989rem;
        border: 1px solid rgb(242, 242, 242);
        margin: 0 1rem 1rem 0;
      }
    }


    span {
      display: inline-block;
      width: 1rem;
      height: 1rem;
      background-color: rgb(255, 255, 255);
      border: 1px solid rgb(242, 242, 242);
      /* border: 5px solid gold; */


      @media only screen and (min-width: 767px){
        all: unset;
      }
    }


    .filter-option {
      /* border: 2px solid #c4c4c4; */
      border: 1px solid #ACA7A6;
      font-size: 0.7801833rem;
      font-weight: 600;
      cursor: pointer;

      :hover {
        background-color: #ffffff;
        border: none;
      }
      :active {
        background-color: #ffffff;
        border: none;
      }
    }
    
    .all-filter {
      background-color: #ffffff;
    }


    .filter-click {
      background-color: #ffffff;
      border: none;
    }

    .filter-unclick {
      background-color: inherit;
      border: 1px solid #ACA7A6;
    }

    .filter-name {
      padding: 1rem;
      margin-top: 1.2rem;
      /* font-weight: 700; */
      
      @media only screen and (min-width: 767px){
        all: unset;
      }
    }
  }
  

  .project-div {
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: flex-start;
    flex-wrap: wrap;

    @media only screen and (min-width: 767px) {
      flex-flow: row wrap;
      flex: 0 0 40%;
    }
  }
}

.portfolio-button {
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  color: var(--black-two);
  letter-spacing: 0.12em;
  border-radius: 2px;
  border: 5px;
  background: inherit;
  border: 1px solid #ACA7A6;
  transition: all .5s;
  width: 15em;
  height: 3.14654rem;
  padding-left: 1rem;
  padding-right: 1rem;
  text-align: center;
  cursor: pointer;
  text-transform: uppercase;
  margin-top: 0.763rem;

  // Stack multiple shadows, one from the left, the other from the right
  :hover,
  :focus {
    box-shadow: 
      /* inset -3.5em 0 0 0 var(--hover),
      inset 3.5em 0 0 0 var(--hover);   */
      inset -15em 0 0 0 var(--btn-color),
      inset 15em 0 0 0 var(--btn-color);
      color: var(--white-two);
  }
}

`
