import styled, { css, ThemeProvider } from 'styled-components';


export const HeaderWrap = styled.div`
  color: #EEEEEF;
  width: 100%;
  font-family: Montserrat, sans-serif;

  .header-wrap {
    height: 100vh;
    width: auto;
    
    @media only screen and (max-width: 1200px) {
      position: relative;
      width: 100vw;
      left: 0;
      right: 0;
      height: 493px;
    }
  }
`

export const HeroWrap = styled.div`
  height: auto;
  width: 100%;
  height: 100%;
  background: conic-gradient(from 163.17deg at 50% 50%, rgba(72, 73, 86, 0.73) 0deg, rgba(47, 79, 79, 0.502145) 180.62deg, rgba(94, 215, 215, 0.456489) 232.5deg, rgba(47, 79, 79, 0.258928) 277.18deg, rgba(59, 67, 73, 0.158272) 309.38deg, rgba(180, 46, 110, 0) 360deg), #191A1D;
  background-blend-mode: soft-light, normal;
  /* box-sizing: border-box; */
`

export const HeroImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  display: block;
  width: 100%;
  /* max-width: 1800px; */
  height: 100%;
  background: url('../../../images/hero-image.png');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  transform: translate(0px, 0px);
  visibility: inherit;
  opacity: 0.2;

  @media only screen and (max-width: 767px) {
    background-position: center top;
    width: 100%;
    height: 493px;
    /* background-color: rgba(0,0,0,0.6); */
  }
`

export const HeroText = styled.div`
  position: absolute;
  top: -5rem;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:flex-start;
  margin: 0 auto;
  margin-top: 80px;
  width: auto;
  /* width: 100%; */
  height: auto;
  color: #fff;
  transition: color .3s ease,opacity .3s ease .65s;
  z-index: 7;
  padding: 0 7rem;
  padding-right: 0;



  @media only screen and (max-width: 767px) {
    margin-left: auto;
    margin-right: auto;
    padding: 0;
    width: auto;
    max-width: 100%;
    align-items: center;
    justify-content: center;
    padding: 0 3rem;
    padding-left: 4rem;
    /* vertical-align: center; */
  }
`

export const HeroHeadingWrap = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center; */
  margin: 0 0 10px;
  padding: 0 0 5px;

  @media only screen and (max-width: 767px) {
      align-items: center;
      justify-content: center;
  }

`

export const HeroHeadingName = styled.h4`
  margin: 0;
  padding: 0 0 5px;
  padding: 5px;
  /* background-color: #EFEEEA; */
  width: fit-content;
  color: #EFEEEA;
  /* text-transform: uppercase; */

  span {
    color: #f06449;
    opacity: 0.5
  }

  .open-bracket {
  }
`

export const HeroHeading =  styled.h1`
  margin: 0;
  padding: 0;
  font-size: calc(112.5% + 2.273vw);
  line-height: 1.42857;
  /* margin: 0 0 10px;
  padding: 0 0 5px; */
  /* :nth-child(2) {
    margin: 0;
    padding: 0;
  } */

  @media only screen and (max-width: 767px) {
      width: 100%;
      text-align: center;
  }
`

export const HeroDescription = styled.p`
  margin: 0;
  padding: 0;
  font-size: 1.375rem;
  font-weight: 400;
  max-width: 600px;
  line-height: 31px;

  @media only screen and (max-width: 1024px) {
    width: 80%;
    text-align: left;
    font-size: 1.20139536rem;
    line-height: 31px;
  }

  @media only screen and (max-width: 767px) {
    width: 90%;
    text-align: center;
    font-size: 1.0139536rem;
    line-height: 22px;
  } 

  .slide-web {
    background-color: #196619;
    background-color: #145214;
    padding:3px;
  }

  .slide-mobile {
    display: none;
  }

  .slide-software {
    display: none;

  }

  .slide-ecommerce {
    display: none;

  }
`

export const TitleDiv = styled.h3`
  font-style: italic;
  font-weight: 400;
  margin-bottom: 25px;
  width: 60%;
  color: #F2F2FC;
`
export const ButtonDiv = styled.div`
  display: inline-block;
  text-align: center;
  vertical-align: middle;
`

export const ContactButton = styled.button`
  /* background: linear-gradient(0deg, #EF3D39, #EF3D39); */

  /* font-family: Montserrat; */
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 21px;
  /* identical to box height */

  color: #FFFFFF;
  letter-spacing: 0.12em;
  border-radius: 2px;

  /* background-color: #f06449; */
  background-color: inherit;
  /* border: none; */
  background: linear-gradient(270deg,#f06449,#ef3636);
  transition: all .3s;
  width: 12em;
  height: 3.4654rem;
  padding-left: 1rem;
  padding-right: 1rem;
  text-align: center;
  text-transform: uppercase;

  @media only screen and (max-width: 767px) {
    width: 10rem;
    height: 3rem;
    font-size: 14px;
  }
`

export const SocialIcons = styled.div`
  
  .social-icons {
    float: right; 
  }

.social-icons.icons-col {
    position: relative;
    top: 18rem;
    right: 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 15rem;
    display: flex;
    flex-direction: column;
    max-width: 27px;
    align-items: center;

    @media only screen and (max-width: 1200px) {
      top: 10rem; 
      right: 2rem;
      height: 8rem;
    }

    @media only screen and (max-width: 767px) {
      display: none;
    }
  }
  
`