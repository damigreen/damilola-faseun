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
  }

  .frame-two {
    top: 1.2rem;
    left: 10rem;
    height: 200px;
    width: 272px;
    background: #007F00;
  }
`

export const AboutContent = styled.div`
  ${borderStyle}
`
