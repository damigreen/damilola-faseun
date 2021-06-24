import React from 'react';
import {
  AboutWrap,
  AboutContent,
  AboutImage,
} from './AboutStyled';
const aboutImage = '../../images/profile-image.jpg';


const About = () => {

  return (
    <AboutWrap>
      <div className="about-wrap">
        {/* <h2 className="service-intro">I am a software developer helping businesses create a presence online </h2> */}
        <AboutImage>
          <div className="frame-one"></div>
          <div className="frame-two"></div>
          <img className="about-image" alt="Image for the about section" src={aboutImage} />
        </AboutImage>
        <AboutContent>
          <h2>About me</h2>
          <p>
          I am a <b>creative front-end developer</b>. I use JavaScript and React to create highly interactive and user friendly web experience and products.
          <b>I create web, Android, IOS and cross platform applications</b> with focus on  meeting brands needs in terms of functionality and apperance.
          <br />My passion is creating <b>web technologies and innovations</b> that helps you reach more customers and <b>aids business growth</b> using the latest and in demand technologies.

          As a highly diligent and hardworking freelancer, I have <b>designed, developed, and deployed</b> several top quality work that cuts accross different sectors like small business, finance, education, retail etc. <b>providing solutions that meets business needs and guranteed</b> to increase conversion rate of your products.
          </p>
        </AboutContent>
      </div>
    </AboutWrap>
  )
}

export default About;
