import styled from 'styled-components';
import {
  borderStyle,
  flexRowWrap,
  flexColumnWrap,
} from '../../AppStyled';

export const AboutWrap = styled.div`
  ${flexColumnWrap};

  @media only screen and (min-width: 991px) {
  ${flexRowWrap};
  }
`

export const AboutImage = styled.div`
  position: relative;
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
    width: 100%;
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
    height: 350px;
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
    width: 272px;
    background: #007F00;

    @media only screen and (max-width: 468px) {
      display: none;
    }
  }
`

export const AboutContent = styled.div`
  padding: 40px;
  width: 100%;
  height: auto;

  /* @media only screen and (max-width: 468px) {
      background: url('../../images/profile-image1.png');
      background-repeat: no-repeat;
      background-size: cover;
      background-position: 90% 50%;
      color: #fff;
      /* opacity: 0.5; */
    } */

  h3 {
    text-align: left;
    margin-bottom: 1.672rem;
    padding: 0.45rem 1.1rem;


    @media only screen and (min-width: 991px) {
      text-align: left;
    } 
  }

  p {
    line-height: 31px;
    padding: 0.5rem 0.856rem;


  }
`
