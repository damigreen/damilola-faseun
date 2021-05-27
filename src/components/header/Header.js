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
      <div className="header-wrap">
        <HeroWrap>
          <Navigation />

          <HeroImage>
          </HeroImage>


          <HeroText>
              <HeroHeadingWrap>
                {/* <HeroHeadingName><span className="open-bracket">&#8249; &#8250;</span> Hello I'm <span className="close-bracket">&#8249; / &#8250;</span></HeroHeadingName> */}
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
        </HeroWrap>
      </div>
    </HeaderWrap>
  )
}

export default Header;
