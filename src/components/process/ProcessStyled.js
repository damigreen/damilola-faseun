import styled from 'styled-components';
import {
  borderStyle,
  flexColumnWrap,
  flexRowWrap,
  textStyle,
} from '../../AppStyled';

export const ProcessWrap = styled.div`
  margin-bottom: 4rem;
    /* width: 100%; */


  .process-wrap {
    ${flexColumnWrap};
    /* justify-content: flex-start; */
    padding: 40px;

    @media only screen and (min-width: 991px) {
      ${flexRowWrap};
      margin: 0 auto;
      width: 90%;
      max-width: 80rem;
    }
  }
`

export const ProcessIntro = styled.div`
  padding: 0.4rem 0.3rem;

  h3 {
    text-align: left;
    padding: 0.5rem 0.456rem;
    margin-left: 1.13rem;
    margin-bottom: 0.9rem;

    @media only screen and (min-width: 991px) {
      text-align: left;
    }

  }

  p {
    padding: 0.3462rem 1.5rem;
    /* padding-left: 1rem;
    padding-right: 1.459rem; */
    font-size: 0.983rem;
    line-height: 30px;
  }
`

export const ProcessContent = styled.div`


  .process-content {
    ${flexColumnWrap};
    background-color: #4A474E;
    padding: 0.8rem 1rem;
    margin: 0 auto;
    max-width: 88%;

    @media only screen and (min-width: 991px) {
      margin-left: 2.33rem;
      ${flexRowWrap};
    }
  }

  .process-title {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    width: 90%;
    padding-top: 1.2rem;
    text-align: left;


    div {
      padding: 0.2rem 0.5rem;
      color: #fff;
      font-size: 0.9rem;
      font-weight: 500;
      text-align: left;
      text-transform: uppercase;

      @media only screen and (min-width: 991px) {
        border: 1px solid green;
        width: 7rem;
        margin-bottom: 1rem;
        justify-self: center;
      }

    }

    @media only screen and (min-width: 991px) {
      ${flexColumnWrap};
      padding-top: 0;
      padding-right: 1.2rem;
      padding: 0.93rem 1.5rem;
      align-items: flex-start;
      justify-content: flex-start;
      border-right: 1px solid gray;
      /* margin-left: 1rem; */
    }
  }

  .process-text {
    color: #ffffff;
    padding: 0.93rem 1.5rem;
    align-self: flex-start;
    /* justify-self: flex-start; */

    p {
      /* margin-top: 1.5rem; */
      /* padding-top: 0.542rem; */
      /* padding-left: 1rem; */
      margin-top: 0;
      padding-right: 0.459rem;
      text-align: left;
      font-size: 0.983rem;
      font-weight: 400;
      line-height: 31px;
    }

  }
`
