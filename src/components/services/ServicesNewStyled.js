import styled from 'styled-components';
import {
  HeadingTertiary,
  HeadingSecondary,
  HeadingPrimary,

} from 'AppStyled';

export const ServicesWrap = styled.div`
  margin: 0;
  padding: 0;
  
  .services-wrap {
    width: auto;
    border: 1px solid brown;
  }
`

export const ServicesRow = styled.div`

  .services-row {
    border: 1px solid gold;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 90%;
    padding: 31px 0;


    @media only screen and (min-width: 1024px) {
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
      max-width: 74rem;
      padding: 31px 3rem;
    }
  }
  `

export const ServiceInfo = styled.div`

  .service-info {
    border: 1px solid green;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    @media only screen and (min-width: 1024px) {
      align-items: flex-start;
    }
  }
  
  .col-title {
    ${HeadingTertiary};
    align-self: center;

    @media only screen and (min-width: 1024px) {
      ${HeadingSecondary}
      width: 100%;
    }
  }

  .col-header {
    ${HeadingPrimary};
    align-self: center;
    margin-top: 1rem;
    width: 100%;
    text-align: center;

    @media only screen and (min-width: 1024px) {
      ${HeadingPrimary};
      margin-left: 0;
      display: flex;
      flex-direction: column;
    }
  }

  .services-button {
    background: red;
    display: none;

    @media only screen and (min-width: 1024px) {
      
    }
  }
`

export const ServiceCard = styled.div`
  width: auto;

  .service-card {
    border: 1px solid purple;
    display: flex;
    flex-direction: column;

    @media only screen and (min-width: 1024px) {      

    }

    .col-card {
      border: 1px solid yellow;
      /* padding: 0 3rem; */
    }

    .col-img {

    }

    .col-inner {
      /* padding: 0 2rem; */
    }
  }
`
