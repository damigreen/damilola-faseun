import styled from 'styled-components';
import {
  HeadingTertiary,
  HeadingSecondary,
  HeadingPrimary,

} from 'AppStyled';

export const ServicesWrap = styled.div`
  margin: 0;
  padding: 0;
  background-color: #f8f8f8;
  
  .services-wrap {
    width: auto;
    border: 1px solid brown;
  }
`

export const ServicesRow = styled.div`

  .services-row {
    /* border: 1px solid gold; */
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
  flex: 0 0 30.33%;

  .service-info {
    border: 1px solid green;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    
    @media only screen and (min-width: 1024px) {
      padding-top: 50px;
      /* align-items: flex-start; */
      /* align-items: center; */
      /* justify-content: center; */
    }
  }
  
  .col-title {
    ${HeadingTertiary};
    align-self: left;

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
    text-align: left;

    @media only screen and (min-width: 1024px) {
      ${HeadingPrimary};
      margin-left: 0;
      display: flex;
      flex-direction: column;
      text-align: left;
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
  flex: 0 0 70.33%;

  .service-card {
    /* border: 2px solid green; */
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 50px 0;

    @media only screen and (min-width: 1024px) {      
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    
    .col-card {
      /* border: 1px solid brown; */
      padding: 0 3rem;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      
      div {
        margin-top: 50px;
      }

      @media only screen and (min-width: 1024px) {
        padding: 0 20px;
        flex: 0 0 42.9987673%;

        img {
          width: 100%;
          /* max-width: 55px;
          height: 55px; */
          margin-top: 50px;
        }
  
      }

      @media only screen and (min-width: 1300px) {
        padding: 0 20px;
        flex: 0 0 44.87673%;
      }
    }
    
    .col-img {
      width: 100%;
      max-width: 55px;
      height: auto;
      margin-top: 50px;
      padding: 0 20px;
      @media only screen and (min-width: 1024px) {          
      }
    }

    .bounce {
      position: relative;
      bottom:0;
      animation: bounce 2s infinite;
      -webkit-animation:bounce 3s infinite ease-in-out;
    }


    @keyframes bounce {
      0% {
        transform: translateY(-5px);
      }
      50% {
        transform: translateY(10px);
      }
      100% {
        transform: translateY(-5px);
      }
    }
    
    .col-inner {
      
      @media only screen and (min-width: 1024px) {      
      }
    }
  }
`
