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
import { HeroHeading } from 'AppStyled';


function Header() {

  return (
    <HeaderWrap>
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

      <div className="header-wrap">
        <HeroWrap>
          <HeroImage>
          </HeroImage>
        </HeroWrap>
        
        <Navigation />

        <HeroText>
            <HeroHeading>Damilola Faseun</HeroHeading>
            <TitleDiv>Freelance Full stack Developer based in Lagos, Nigeria</TitleDiv>
            <ButtonDiv>
              <AboutButton>About Me</AboutButton>
            </ButtonDiv>
        </HeroText>

      </div>
    </HeaderWrap>
  )
}

export default Header;
