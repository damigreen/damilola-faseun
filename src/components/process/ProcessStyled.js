import styled from 'styled-components';
import {
  borderStyle,
  flexColumnWrap,
  flexRowWrap,
  textStyle,
} from '../../AppStyled';

export const ProcessWrap = styled.div`

  .process-wrap {
    ${flexColumnWrap};
    /* justify-content: flex-start; */
    padding: 40px;

    @media only screen and (min-width: 991px) {
      ${flexRowWrap};
      margin: 0 auto;
      width: 100%;
      max-width: 80rem;
    }
  }
`

export const ProcessIntro = styled.div`
  padding: 0.4rem 0.3rem;

  h3 {
    text-align: center;
    padding: 0.5rem 0.456rem;
    padding-left: 1rem;
    margin-bottom: 1rem;

    @media only screen and (min-width: 991px) {
      text-align: left;
    }

  }

  p {
    padding: 0.3462rem;
    padding-left: 1rem;
    padding-right: 1.459rem;
    font-size: 0.983rem;
    line-height: 30px;
  }
`

export const ProcessContent = styled.div`
  background-color: #4A474E;
  margin-left: 2.33rem;


  .process-content {
    ${flexColumnWrap};

    @media only screen and (min-width: 991px) {
      ${flexRowWrap};
    }
  }

  .process-title {
    /* ${flexRowWrap}; */
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    width: 90%;
    padding: 0.56rem 1.4rem;
    text-align: left;


    div {
      padding-bottom: 0.23rem;
      padding-left: 0.5rem;
      padding-right: 0.5rem;
      padding: 0.2rem 0.5rem;
      color: #fff;
      font-size: 0.9rem;
      font-weight: 500;
      text-align: left;
      text-transform: uppercase;

      @media only screen and (min-width: 991px) {
        border: 1px solid green;
        width: 7rem;
        margin-bottom: 5px;
        justify-self: center;
      }

    }

    @media only screen and (min-width: 991px) {
      ${flexColumnWrap};
      align-items: flex-start;
      justify-content: flex-start;
      border-right: 1px solid gray;
    }
  }

  .process-text {
    color: #ffffff;
    padding: 0.93rem 2.5rem;

    p {
      /* margin-top: 1.5rem; */
      padding-top: 0.542rem;
      padding-left: 1rem;
      padding-right: 0.459rem;
      text-align: left;
      font-size: 0.983rem;
      font-weight: 400;
      line-height: 31px;
    }

  }
`
