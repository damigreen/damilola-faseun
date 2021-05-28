import React from 'react';
import Navigation from './Navigation';
import {
  HeaderWrap,
  HeroWrap,
  HeroText,
  TitleDiv,
  ContactButton,
  ButtonDiv,
  HeroImage,
  HeroHeading,
  HeroDescription,
  HeroHeadingName,
  HeroHeadingWrap,
  SocialIcons,
} from './HeaderStyle'


function Header() {
  {/* <HeroWrap>
    <HeroImage>
      <Navigation />
        <HeroText>
          <HeroContent>
            <NameDiv>Damilola Faseun</NameDiv>
            <TitleDiv>Freelance Full stack Developer based in Lagos, Nigeria</TitleDiv>
            <ButtonDiv>
              <ContactButton>About Me</ContactButton>
            </ButtonDiv>
          </HeroContent>
        </HeroText>
    </HeroImage>
  </HeroWrap> */}

  return (
    <HeaderWrap>
      <Navigation />
      <div className="header-wrap">
        <HeroWrap>
          <HeroImage>
          </HeroImage>


          <HeroText>
              <HeroHeadingWrap>
                <HeroHeadingName>Hello I'm</HeroHeadingName>
                <HeroHeading>Damilola Faseun</HeroHeading>
                <HeroHeading>Full Stack Web Developer</HeroHeading>
              </HeroHeadingWrap>

              <HeroDescription>Engineering top-notch <span className="slide-web">custom website</span>
                                                      <span className="slide-mobile" style={{ display: 'none' }}>mobile apps</span>
                                                      <span className="slide-software" style={{ display: 'none' }}>software product</span>
                                                      <span className="slide-ecommerce" style={{ display: 'none' }}>e-commerce solutions</span> with a mix of creative ideas and digital technology</HeroDescription>
              <TitleDiv></TitleDiv>
              <ButtonDiv>
                <ContactButton>Contact me!</ContactButton>
              </ButtonDiv>
          </HeroText>

          <SocialIcons>
            <div className="social-icons icons-col icons-row">
              <img src={`../../../icons/github.png`} alt="gitnub icon" />
              <img src={`../../../icons/linkedin.png`} alt="gitnub icon" />
              <img src={`../../../icons/twitter.png`} alt="gitnub icon" />
              <img src={`../../../icons/behance.png`} alt="gitnub icon" />
            </div>
          </SocialIcons>
        </HeroWrap>
      </div>
    </HeaderWrap>
  )
}

export default Header;
