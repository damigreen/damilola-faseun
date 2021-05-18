import React from 'react';
import {
  AboutWrap,
  AboutContent,
  AboutImage,
} from './AboutStyled';


const About = () => {

  return (
    <AboutWrap>
      <AboutImage>
        <img className="about-image" alt="Image for the about section" />
        <div className="frame-one"></div>
        <div className="frame-two"></div>
      </AboutImage>
      <AboutContent>
        <h1>About me</h1>
        <p>
          I realize the dominating thoughts of my mind will eventually
          reproduce themselves in outward, physical action, and gradually transform
          themselves into physical reality, therefore, I will concentrate my thoughts for
          thirty minutes daily, upon the task of thinking of the person I intend to
          become, thereby creating in my mind a clear mental picture of that person.
        </p>
      </AboutContent>
      
    </AboutWrap>
  )
}

export default About;
