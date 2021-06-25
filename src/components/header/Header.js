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
    const heroSection = document.querySelector('.header-wrap');
    const navHeader = document.querySelector('.nav-main');
    const logoSpan = document.querySelector('.logo-span');
    const navLink = document.querySelector('.nav-list');
    const navFilter = document.querySelector('.nav-filter');
    // const navLink = document.querySelector('ul');

    const heroSectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {

        if (!entry.isIntersecting) {
          navHeader.classList.add('page-scrolled');
          navLink.style.color = "#212529";
          logoSpan.style.color = "#171717";
          // navFilter.style.border = '1px solid red';
          // navFilter.style.background = `url('../../../icons/justify.png')`;
          // navFilter.style.backgroundSize = 'cover';
          // navFilter.style.backgroundRepeat = 'no-repeat';
          navFilter.classList.add('nav-filter-ext')
        } else {
          navHeader.classList.remove('page-scrolled');
          navLink.style.color = "#f4f4f4";
          logoSpan.style.color = "#D44B31";
          // navFilter.style.background = `url('../../../icons/justify-white.png')`;
          // navFilter.style.backgroundSize = 'cover';
          // navFilter.style.backgroundRepeat = 'no-repeat';
          // navFilter.style.border = 'none';
          navFilter.classList.remove('nav-filter-ext')

        }
      })
    },heroSectionOption);
    
    heroSectionObserver.observe(heroSection);  
 
  } catch (e) {
    console.log(e);
  }
}



function Header() {
    useEffect(() => {
      handleIntersection();
    }, []);

  return (
    <HeaderWrap>
      <Navigation />
      <div className="header-wrap">
        <HeroWrap>
          <HeroImage>
          </HeroImage>


          <HeroText>
              <HeroHeadingWrap>
                <HeroHeadingName style={{color: "#838285", border: 0,padding: 0}}>Hello I'm</HeroHeadingName>
                <HeroHeading>Damilola Faseun</HeroHeading>
                <HeroHeading>Full Stack Web Developer</HeroHeading>
              </HeroHeadingWrap>

              <HeroDescription>Engineering top-notch <span className="bg-trans bg-web">custom website</span>
                                                      <span className="bg-trans bg-mobile" style={{ display: 'none' }}>mobile apps</span>
                                                      <span className="bg-trans bg-software" style={{ display: 'none' }}>software product</span>
                                                      <span className="bg-trans bg-ecommerce" style={{ display: 'none' }}>e-commerce solutions</span> with a mix of creative ideas and digital technology</HeroDescription>
              <TitleDiv></TitleDiv>
              <ButtonDiv>
                <ContactButton>Contact me!</ContactButton>
              </ButtonDiv>
          </HeroText>

          <SocialIcons>
            <div className="social-icons icons-col icons-row">
              <a href="https://github.com/damigreen" rel="noreferrer" target="_blank">
                <img src={`../../../icons/github.png`} alt="github icon" />
              </a>
              <a href="https://www.linkedin.com/in/damilola-faseun-748602b1" rel="noreferrer" target="_blank">
                <img src={`../../../icons/linkedin.png`} alt="linkein icon" />
              </a>
              <a href="https://twitter.com/damilolaFaseun" rel="noreferrer" target="_blank">
                <img src={`../../../icons/twitter.png`} alt="twitter icon" />
              </a>
              <a href="https://www.behance.net/damigreen" rel="noreferrer" target="_blank">
                <img src={`../../../icons/behance.png`} alt="behance icon" />
              </a>
            </div>
          </SocialIcons>
        </HeroWrap>
      </div>
    </HeaderWrap>
  )
}

export default Header;
