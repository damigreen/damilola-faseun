import styled, { css } from 'styled-components';


export const FooterWrap = styled.div`
  width: 100%;

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
    }
  }

  .copyrights {
    text-align: center;
    border-top: 1px solid gold;
    padding: 3rem;

    @media only screen and (min-width: 767px) {
      border-top: 1px solid gold;
      margin: 0 auto;
      max-width: 68rem;
      text-align: right;
      padding: 3rem;
    }
  }
`
export const InfoWrap = styled.div`

  @media only screen and (min-width: 767px) {
    flex: 0 0 30%;
  }

  .info-wrap {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    img {
      width: 65px;
      height: 65px;
    }

    h2 {
      text-transform: uppercase;
      margin-left: 0.791rem;
    }
  }

  .social-icons {
    /* margin-top: 1rem; */
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }
`
export const SiteMapWrap = styled.div`

  @media only screen and (min-width: 767px) {
    flex: 0 0 28%;
    /* justify-self: center; */
    align-self: center;
    vertical-align: middle;
    margin-left: 2rem;
  }


  h3 {
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


  h3 {
      margin-bottom: 0.68941rem;
    }

  
  
`
