import styled, { css } from 'styled-components';


export const FooterWrap = styled.div`
  width: 100%;
  background-color: #EFEEEA;

  .footer-wrap {
  }

  .footer-row {
    padding: 2rem;

    @media only screen and (min-width: 767px) {
      /* width: 100%; */
      margin: 0 auto;
      max-width: 74rem;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      align-items: flex-start;
    }

    @media only screen and (min-width: 460px) and (max-width: 767px) {
      margin: 0 auto;
      width: 85%;
      max-width: 74rem;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
    }

    @media only screen and (max-width: 460px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }

  .copyrights {
    text-align: center;
    border-top: 1px solid #b2ad99;
    padding: 3rem;

    @media only screen and (min-width: 767px) {
      border-top: 1px solid #b2ad99;
      margin: 0 auto;
      max-width: 68rem;
      text-align: right;
      padding: 3rem;
    }
  }
`
export const InfoWrap = styled.div`
  margin-bottom: 2rem;

  @media only screen and (min-width: 767px) {
    flex: 0 0 30%;
  }

  @media only screen and (max-width: 460px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .info-wrap {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 1.4rem;

    @media only screen and (max-width: 460px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }


    img {
      width: 65px;
      height: 65px;
    }

    h2 {
      text-transform: uppercase;
      margin-left: 0.791rem;
      color: #1F1A28;
      margin:0;
    }
  }

  .social-icons {
    /* margin-top: 1rem; */
    display: flex;
    flex-direction: row;
    justify-content: flex-start;

    @media only screen and (max-width: 460px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    justify-self: center;
  }

    
  }
`
export const SiteMapWrap = styled.div`
  @media only screen and (min-width: 767px) {
    flex: 0 0 28%;
    vertical-align: middle;
    margin-left: 2rem;
  }

  @media only screen and (max-width: 460px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 1.4rem;
  }


  h3 {
    text-transform: uppercase;
    font-size: 1.0234rem;
    margin: 0;
    margin-bottom: 0.68941rem;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
`
export const SubscriptionWrap = styled.div`

  @media only screen and (min-width: 767px) {
    flex: 0 0 35%;
  }

  @media only screen and (min-width: 460px) {
      width: 50%;
    }

  @media only screen and (max-width: 460px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 1.4rem;
  }



  h3 {
    margin: 0;
    margin-bottom: 0.68941rem;
    text-transform: uppercase;
    font-size: 1.0234rem;
  }

  p {
    @media only screen and (max-width: 460px) {
      width: 65%;
    }
  }

  div {
    width: 65%;
  }
  
  
`
