import styled from 'styled-components';
import {
  borderStyle,
  flexColumnWrap,
  flexRowWrap,
  textStyle,
} from '../../AppStyled';

export const ProcessWrap = styled.div`
  ${borderStyle}; 

  .process-wrap {
    ${flexColumnWrap};
    /* justify-content: flex-start; */
    padding: 40px;

    @media only screen and (min-width: 991px) {
      ${flexRowWrap};
    }
  }
`

export const ProcessIntro = styled.div`
  ${borderStyle};
  padding: 0.4rem 1.5rem;

  h3 {
    text-align: left;
  }
`

export const ProcessContent = styled.div`
  border: 1px solid green;

  .process-content {
    ${flexColumnWrap};

    @media only screen and (min-width: 991px) {
      ${flexRowWrap};
    }
  }

  .process-title {
    ${flexRowWrap};

    @media only screen and (min-width: 991px) {
      ${flexColumnWrap};
    }
  }
`
