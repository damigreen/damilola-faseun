import styled from 'styled-components';
import {
  flexColumnWrap,
  flexRowWrap,
  HeadingPrimary,
  HeadingSecondary,
  HeadingTertiary,

} from '../../AppStyled';



export const ProcessWrap = styled.div`
  padding: 50px 0;

  .process-wrap {
    border: 1px solid red;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: flex-start;
    
    @media only screen and (min-width: 1024px) {
      align-items: center;
      /* justify-content: flex-start; */
    }
  }

  h3 {
    ${HeadingSecondary};
    font-size: 1.514529873rem;
    text-align: center;
    line-height: 31px;
    width: 100%;

  }

  h2 {
    ${HeadingPrimary};
    text-align: center;
    border: 1px solid red;
    margin-top: 10px;
    width: 100%;
  }
`

export const ProcessContent = styled.div`

  .process-content {
    border: 1px solid green;


    @media only screen and (min-width: 1024px) {
      background: lime;
    }
  }
`

export const ProcessCard = styled.div`

  .process-card {
    border: 1px solid yellow;
    
  }

  .bg {
    border: 1px solid green;
  }
`
