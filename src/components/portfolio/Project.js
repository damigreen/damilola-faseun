import React, { useEffect, useLayoutEffect } from 'react';
import Navigation from '../header/Navigation';

import { 
  ProjectWrap,
  ProjectHero,
  ProjectSection,
  SectionC,
  SectionD,
  
} from './ProjectStyled';

// const sectionOption =  {
//   rootMargin: "0",
// }

const handleIntersection = () => {
  
  try {
    const section = document.querySelector('.section-c');
    const intro = document.querySelector('.intro-b');

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        console.log(entry)
    
        if (!entry.isIntersecting) {
          intro.classList.add('absolute');
          intro.classList.remove('fixed');
          console.log('Not intersect---------------------------------')
        } else {
          intro.classList.add('fixed');
          intro.classList.remove('absolute');
          console.log('intersect---------------------------------')
        }
      })
    }, );
  
    sectionObserver.observe(intro);
  } catch (e) {
    console.log(e)
  }
}

const Project = ({ currentProject }) => {
  const projectCover = '../../../images/sample-hero.jpg';
  const projectSkeleton = '../../../images/project-skeleton.png';

  useEffect(() => {
    handleIntersection();
  }, []);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });


  return (
    <ProjectWrap>
      <div className='project-wrap'>
      <Navigation />
      <ProjectHero>
        <div className='project-hero'>
            {/* < */}
        </div>
      </ProjectHero>
      <ProjectSection>
        <div className='project-section section-margin flex-col'>
          <section className='section-a section-padding flex-col'>
            <h2>The Breif</h2>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
            </p>
          </section>
          <section className="section-b section-padding flex-center relative">
            <img alt='Project cover image' src={projectCover}/>
          </section>
          {/* <section className="wrap-flex section-padding section-c"> */}
          <SectionC className="section-padding section-c relative">
            <div className="intro-b section-padding absolute">
              <h3>Blogs Keep</h3>
              <p project-description>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
            </div>
            <figure className='browser float-r'>
              <img alt='Project image landing page' src={projectSkeleton} />
            </figure>
          </SectionC>
          <SectionD>

          </SectionD>
        </div>
        <div>

        </div>
      </ProjectSection>
      </div>
    </ProjectWrap>
  )
}

export default Project;
;
