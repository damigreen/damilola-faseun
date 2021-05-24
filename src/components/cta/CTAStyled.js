import styled from 'styled-components';


export const CTAWrap = styled.div`
  position: relative;
  top: 0;
  left: 0;

  .cta-wrapper {
    width: 100%;
    background: url('../../../images/cta-background.png');
    background-position: 50% 50%;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;

  }

  /* .parallax {
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
  } */

  .cta-wrap {
    height: auto;
    min-height: 300px;
    max-height: 400px;
    margin:0 auto;
    width: auto;
    display: flex;
    flex-direction: row;
    /* justify-content: space-between; */
    justify-content: center;
    align-items: center;
    width: 79%;
    /* max-width: 80rem; */
    padding: 0.34rem 1.989rem;

    @media only screen and (max-width: 767px) {
      padding: 3.1rem;
      text-align: center;
      flex-flow: column wrap;
      justify-content: center;
    }

    @media only screen and (min-width: 1200px) {
      min-height: 300px;
    }

  }

  .cta-text {
    display: flex;
    color: #FFF;
    color: #9B7874;
    color: #f7f0f0;

    font-size: 1.0393456rem;
    font-size: 1.7393456rem;
    font-weight: 500;
    letter-spacing: 0.1245rem;

    @media only screen and (max-width: 767px) {
      font-size: 1.39983rem;
      margin-bottom: 3rem;
    }
  }

  .button-wrap {
    /* flex: 0 0 30%; */
    display: flex;
    flex-direction: row;
    justify-content: flex-end;

    button {
      padding: 0.4961rem 1rem;
      height: auto;
      width: 9rem;
      color: #FFF;
      text-transform: uppercase;
      font-size: 0.88982rem;
      border-radius: 3px;
      
      :first-child {
        margin: 0 1.7489rem 0.21rem 0;
        background-color: #862020;
        border: 1px solid #862020;
      }

      :last-child {
        background-color: #6FA568;
        border: 1px solid #6FA568;
      }
    }
  }
`
