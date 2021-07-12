import styled from 'styled-components';
import { HeadingPrimary, HeadingSecondary } from 'AppStyled';


export const ProjectWrap = styled.div`

  .project-wrap {
  }

  .primary-heading {
    ${HeadingPrimary};
  }
`

export const ProjectHero = styled.div`

  .project-hero {
    /* width: 500px; */
    max-width: 100%;
    height: 500px;
    border: 1px solid red;
    background: url('../../../images/blogskeep-hero.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    transform: matrix(1, 0, 0, 1, 0, 0);
  }
`
export const ProjectSection = styled.div`
  width: 100%;

  .project-section {
    align-items: center;

    h2 {
      ${HeadingSecondary};
      text-transform: uppercase;
      text-align: center;
    }

    p {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      vertical-align: middle;
      max-width: 800px;
      margin: 0 auto;
      line-height:22px;
      text-align: center;
    }

    .section-margin {
      width: 90%;
      margin: 0 auto;
    }

    .section-b {
      /* width:100%; */

      img {
        width: 100%;
        max-width: 1440px;
        height: auto;
        z-index: 0;
      }
    }
  }
`

export const SectionC = styled.section`
  position: relative;
  width: 100%;
  max-width: 1440px;
  display: block;
  border: 3px solid gold;

  @media only screen and (min-width: 767px) {

  }

  h3 {
    margin: 16px 0;
  }

  .browser {
    margin: 0;
    width: 66.666%;
    float: right;
    top: 120px;

    @media only screen and (max-width: 800px) {
      width: 100%
    }
    
    img {
      float: right;
      justify-self: flex-end;
    }
  }

  .intro-b {
    position: absolute;
    top: 120px;
    width: 30%;
    border: 2px solid green;
    
    @media only screen and (max-width: 800px) {
      width: 100%;
      float: left;
      position: static;
      padding-bottom: 31px;
    }
  }

  .project-description {
    text-align: left;
    line-height: 22px;
    color: #313131;
  }

  .section-padding {
    padding: 51px 0;
    padding-bottom: 0;
  }
`