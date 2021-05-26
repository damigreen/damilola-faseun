import { HeroHeading } from 'AppStyled';
import styled, { css, ThemeProvider } from 'styled-components';


export const HeaderWrap = styled.div`
  color: #EEEEEF;
  /* height: 800px; */




  .header-wrap {
    height: 100vh;
    width: 100%;
    position: relative;
    top: 0;
    left: 0;
    border: 1px solid red;
    
    @media only screen and (max-width: 1200px) {
      height: 493px;
    }
  }
`

export const HeroWrap = styled.div`
  /* background-color: yellow; */
  width: 100%;
  height: auto;
  height: 100%;

  background: conic-gradient(from 163.17deg at 50% 50%, rgba(72, 73, 86, 0.73) 0deg, rgba(47, 79, 79, 0.502145) 180.62deg, rgba(94, 215, 215, 0.456489) 232.5deg, rgba(47, 79, 79, 0.258928) 277.18deg, rgba(59, 67, 73, 0.158272) 309.38deg, rgba(180, 46, 110, 0) 360deg), #191A1D;
  background-blend-mode: soft-light, normal;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border: 4px solid brown;
  box-sizing: border-box;
`

export const HeroImage = styled.div`
  border: 5px solid green;
  width: 100%;
  height: 100%;
  background: url('../../../images/hero-image.jpg');
  background-position: center top;
  background-size: cover;
  background-repeat: no-repeat;
  transform: translate(0px, 0px);
  visibility: inherit;
  opacity: 0.2;

  @media only screen and (max-width: 767px) {
    /* background-size: contain; */
    height: 500px;
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
  width: 100%;
  max-width: 1800px;
  height: auto;
  border: 1px solid gold;
  color: #fff;
  transition: color .3s ease,opacity .3s ease .65s;
  z-index: 7;
  padding: 0 7rem;

`

// export const NameDiv = styled.h1`
//   ${HeroHeading};
//   margin-bottom: .1875566421em;
// `

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

export const AboutButton = styled.button`
  /* background: linear-gradient(0deg, #EF3D39, #EF3D39); */

  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 21px;
  /* identical to box height */

  color: #FFFFFF;
  letter-spacing: 0.12em;
  border-radius: 2px;

  background-color: #f06449;
  border: none;
  background: linear-gradient(270deg,#f06449,#ef3636);
  transition: all .3s;
  width: 7em;
  height: 40.5px
`
