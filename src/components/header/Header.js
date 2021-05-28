import React, { useEffect } from 'react';
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


const heroSectionOption = {
  rootMargin: "0px 0px 200px 0px"
};

const handleIntersection = () => {
  try {
    const navHeader = document.querySelector('.nav-main');
    const navLink = document.querySelector('.nav-link');
    const heroSection = document.querySelector('.header-wrap');

    const heroSectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // console.log(entry);

        if (!entry.isIntersecting) {
          navHeader.classList.add('page-scrolled');
          navLink.classList.add('invert-link');
        } else {
          navHeader.classList.remove('page-scrolled');
          navLink.classList.remove('invert-link');
        }
      })
    },heroSectionOption);
    
    heroSectionObserver.observe(heroSection);
    console.log('done-------------')
  
 
  } catch (e) {
    console.log(e);
  }
}



function Header() {
    useEffect(() => {
      handleIntersection();
    }, [handleIntersection]);

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
              <a href="">
                <img src={`../../../icons/github.png`} alt="gitnub icon" />
              </a>
              <a>
                <img src={`../../../icons/linkedin.png`} alt="gitnub icon" />
              </a>
              <a>
                <img src={`../../../icons/twitter.png`} alt="gitnub icon" />
              </a>
              <a>
                <img src={`../../../icons/behance.png`} alt="gitnub icon" />
              </a>
            </div>
          </SocialIcons>
        </HeroWrap>
      </div>
    </HeaderWrap>
  )
}

export default Header;
