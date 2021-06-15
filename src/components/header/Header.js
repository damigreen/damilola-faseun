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
    const navLink = document.querySelector('ul');
    console.log(navLink);

    const heroSectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {

        if (!entry.isIntersecting) {
          navHeader.classList.add('page-scrolled');
          navLink.style.color = "#212529";
        } else {
          navHeader.classList.remove('page-scrolled');
          navLink.style.color = "#f4f4f4";
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
              <a href="">
                <img src={`../../../icons/github.png`} alt="github icon" />
              </a>
              <a>
                <img src={`../../../icons/linkedin.png`} alt="linkein icon" />
              </a>
              <a>
                <img src={`../../../icons/twitter.png`} alt="twitter icon" />
              </a>
              <a>
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
