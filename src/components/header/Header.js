import React from 'react';
import Navigation from './Navigation';
import {
  HeaderWrap,
  HeroWrap,
  HeroText,
  HeroContent,
  NameDiv,
  TitleDiv,
  AboutButton,
  ButtonDiv,
} from './HeaderStyle'


function Header() {

  return (
    <HeaderWrap>
      <HeroWrap>
      <Navigation />
        <HeroText>
          <HeroContent>
            <NameDiv>Damilola Faseun</NameDiv>
            {/* <TitleDiv>I’ m a Freelance Full stack Developer based in Lagos, Nigeria</TitleDiv> */}
            <TitleDiv>Freelance Full stack Developer based in Lagos, Nigeria</TitleDiv>
            <ButtonDiv>
              <AboutButton>About Me</AboutButton>
            </ButtonDiv>

            {/* <div>
              <h2>_Stacks</h2>
              <p>React </p>
            </div> */}

          </HeroContent>
        </HeroText>
      </HeroWrap>
    </HeaderWrap>
  )
}

export default Header;
