import styled from 'styled-components';
import {
  borderStyle,
  flexRowWrap,
  flexColumnWrap,
} from '../../AppStyled';

export const AboutWrap = styled.div`

  .about-wrap {
    display: flex;
    flex-direction: column;
    /* margin: 0 auto; */
    width: 100%;

    @media only screen and (min-width: 991px) {
      ${flexRowWrap}; 
      justify-content: space-evenly;
      align-items: flex-start;
      margin: 0 auto;
      width: 90%;
      padding: 31px;
      max-width: 75rem;
    }

    .service-intro {
      margin: 0 auto;
      text-align: center;
        width: 68%;
        padding: 20px 30px;
        padding-top: 40px;
        font-size: 3.2901rem;
        font-weight: 400;
        line-height: 5rem;
        /* text-align: left; */

        @media only screen and (max-width: 480px) {
            width: 90%;
            font-size: 1.00344rem;
            line-height: 2.3rem;
        }

        @media only screen and (max-width: 767px) {
            width: 90%;
            font-size: 2.90344rem;
            line-height: 2.93rem;
        }
    }


  }
`

export const AboutImage = styled.div`
  position: relative;
  margin: 0 auto;
  width: 100%;
  max-width: 450px;
  height: auto;
  margin-bottom: 30rem;

  @media only screen and (min-width: 991px) {
    min-width: 450px;
  }

  @media only screen and (max-width: 468px) {
      display: none;
    }

  img {
    padding: 2rem;
    width: 80%;
    height: auto;
  }

  img, .frame-one, .frame-two {
    position: absolute;
    top: 0px;
    left: 0px;
  }
  .frame-one {
    top: 5rem;
    left:1.2rem;
    height: 325px;
    width:200px;
    background: #B51C1C;

    @media only screen and (max-width: 468px) {
      display: none;
    }
  }

  .frame-two {
    top: 1.2rem;
    left: 10rem;
    height: 200px;
    width: 248px;
    background: #007F00;

    @media only screen and (max-width: 468px) {
      display: none;
    }
  }
`

export const AboutContent = styled.div`
  padding: 31px 0;
  height: auto;
  margin: 0 auto;
  width: 90%;

  /* @media only screen and (max-width: 468px) {
      background: url('../../images/profile-image1.png');
      background-repeat: no-repeat;
      background-size: cover;
      background-position: 90% 50%;
      color: #fff;
    }
  */ 

  h3 {
    text-align: left;
    margin-bottom: 1.672rem;
    padding: 0.45rem 0rem;

    @media only screen and (min-width: 991px) {
      text-align: left;
    } 
  }

  p {
    line-height: 31px;
    padding: 0.5rem 0rem;
  }
`
