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
      justify-content: center;
      align-items: flex-start;
    }
  }

  `

export const ServiceInfo = styled.div`

  .service-info {
    border: 1px solid orange;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }


  
  .col-title {
    ${HeadingTertiary};

    @media only screen and (min-width: 1024px) {
      ${HeadingSecondary}  
    }
  }

  .col-header {
    ${HeadingSecondary};

    @media only screen and (min-width: 1024px) {
      ${HeadingPrimary};
      width: 50%;
      
    }
  }

  .services-button {
    background: red;
    display: none;

    @media only screen and (min-width: 1024px) {
      display: block;

    }
  }

`

export const ServiceCard = styled.div`
  border: 1px solid red;

  .service-card {
    border: 1px solid purple;
  }

`
