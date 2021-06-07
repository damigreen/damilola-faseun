import styled from 'styled-components';
import {
  flexColumnWrap,
  flexRowWrap,
  HeadingPrimary,
  HeadingSecondary,
  HeadingTertiary,
  FlexRow,
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
    @media only screen and (min-width: 1024px) {
    }
  }
`

export const ProcessCard = styled.div`
  @media only screen and (min-width: 1024px) {
  }

  .process-card {
  }
  
  .card {
    border: 1px solid yellow;
    margin: 0;
    padding: 0;
  }

  
  .design {
    background-image: url('../../../images/design.png');
    background-position: center top;
  }
  
  .develop {
    background-image: url('../../../images/develop.png');
  }
  
  .deploy {
    background-image: url('../../../images/deploy.png');
    /* background-position: center 50%; */
  }
  
  .card-bg {
    height: 150px;
    max-height: auto;
    min-height: 1px;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;

    @media only screen and (min-width: 1024px) {
      justify-content: center;
      align-items: center;
    }
  }

  h4 {
    margin-left: 20px;
    margin-bottom: 20px;
    color: var(--white-two);

    @media only screen and (min-width: 1024px) {
      margin: 0;
    }
  }

  p {
    padding: 20px;
    margin: 0;
  }
`
