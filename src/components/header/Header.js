import React from 'react';
import Navigation from './Navigation';
import {
  HeaderWrap,
  HeroWrap,
  HeroText,
  HeroContent,
  TitleDiv,
  AboutButton,
  ButtonDiv,
  HeroImage,
} from './HeaderStyle'
import {
  HeroHeading,
  HeroHeadingName,
  HeroDescription,
} from 'AppStyled';


function Header() {
  {/* <HeroWrap>
    <HeroImage>
      <Navigation />
        <HeroText>
          <HeroContent>
            <NameDiv>Damilola Faseun</NameDiv>
            <TitleDiv>Freelance Full stack Developer based in Lagos, Nigeria</TitleDiv>
            <ButtonDiv>
              <AboutButton>About Me</AboutButton>
            </ButtonDiv>
          </HeroContent>
        </HeroText>
    </HeroImage>
  </HeroWrap> */}

  return (
    <HeaderWrap>
      <div className="header-wrap">
        <HeroWrap>
          <HeroImage>
          </HeroImage>
        </HeroWrap>
        
        <Navigation />

        <HeroText>
            <HeroHeadingName>Hi, I'm Damilola Faseun</HeroHeadingName>
            <HeroHeading>Full stack Developer</HeroHeading>
            <HeroHeading> based in Lagos, Nigeria</HeroHeading>
            <HeroDescription>Engineering top-notch <span className="slide-web">custom web development</span>
                                                    <span className="slide-mobile" style={{ display: 'none' }}>mobile apps</span>
                                                    <span className="slide-software" style={{ display: 'none' }}>software product</span>
                                                    <span className="slide-ecommerce" style={{ display: 'none' }}>e-commerce solutions</span> with a mix of creative ideas and technology with digital knowledge to </HeroDescription>
            <TitleDiv></TitleDiv>
            <ButtonDiv>
              <AboutButton>About Me</AboutButton>
            </ButtonDiv>
        </HeroText>
      </div>
    </HeaderWrap>
  )
}

export default Header;
