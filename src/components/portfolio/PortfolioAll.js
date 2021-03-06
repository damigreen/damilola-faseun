import React, { useState, useEffect, useLayoutEffect } from 'react';
import {
    PortfolioWrap,
    ProjectWrap,
    ProjectWrapLeft,
    ProjectWrapRight,
    TextWrap,
    ImageWrap,

} from './PortfolioStyled';
import Navigation from '../header/Navigation';
import { Link } from 'react-router-dom';


const showFilterWidget = () => {
    console.log('show filter')
}


const ProjectsLeft = ({i, p}) => {
    return (
        <ProjectWrapLeft key={i}>
            <Link 
                to={p.display === true ? `/${p.link}` : {pathname: p.url}}
                target={p.display ? "" : "_blank"}
                className="project left"
                rel='noreferrer'
            >
                <ImageWrap>
                    <div className="image-wrap">
                        <img alt="Image for projects done" src={`../../../images/${p.image}`} />
                    </div>
                </ImageWrap>

                <TextWrap>
                    <p className="project-title">{p.title}</p>
                    <p className="project-category">{p.categories}</p>
                </TextWrap>
            </Link>
        </ProjectWrapLeft>
    )
}

const ProjectsRight = ({i, p}) => {
    return (
        <ProjectWrapRight key={i}>
            <Link 
                to={p.display === true ? `/${p.link}` : {pathname: p.url}}
                target={p.display ? "" : "_blank"}
                className="project right"
                rel='noreferrer'
            >
                <ImageWrap>
                        <img alt="Image for projects done" src={`../../../images/${p.image}`} />
                </ImageWrap>

                <TextWrap>
                    <p className="project-title">{p.title}</p>
                    <p className="project-category">{p.categories}</p>
                </TextWrap>
            </Link>
            {/* </a> */}
        </ProjectWrapRight>
    )
}


const Portfolio = (portfolio) => {
    const [navBar, setNavBar] = useState(null);
    const [navMain, setNavMain] = useState(null);

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    });

    useEffect(() => {
        setNavBar(document.querySelector('.nav-bar'));
        setNavMain(document.querySelector('.nav-main'));

        if ((navMain && navBar)) {
            // console.log('no objects......................');
            navBar.style.color = '#171717';
            navMain.style.borderBottom = '.8px solid rgba(138, 185, 51, .4)';
            navMain.style.boxShadow = '0 2px 8px 0 rgb(0 0 0 / 10%)';
            navMain.style.height = '3rem';
            navMain.style.transition =  'height .781s'
        }
    }, [navBar, navMain]);

    
    if (portfolio.data === undefined) {
        return <div>Loading.....................</div>
    }
    
    const projects = portfolio.data.projects.map((p, i) => {
        return (
            <ProjectWrap index={i} key={i}>
                <div className="project-wrap">
                    { i%2 ? <ProjectsRight p={p} i={i} /> : <ProjectsLeft p={p} i={i} /> }
                </div>
            </ProjectWrap>
        )
    });
    
    return(
        <PortfolioWrap>
          <Navigation className="port-nav" />
            <div className="portfolio-wrap">
                <div className="portfolio-header-main">
                    <div className="portfolio-heading">
                        <h3>Selected Works</h3>
                        
                        <h4>Take a peek at some of my latest project</h4>
                        {/* <p>From Web and mobile applications to websites for different sectors like hospitality, education e-commerce and business website, check out some of my projects</p> */}
                    </div>
                </div>

                <div className="filter">
                    {/* <div className="filter-box"><p>Filter by</p> <span onClick={showFilterWidget}><img src={'../../../icons/filter-icon.png'} /></span></div> */}
                    <div className="filter-box"><span className="filter-by">Filter by</span> <span className="filter-button" onClick={showFilterWidget}><img src={'../../../icons/filter-icon.png'} /></span></div>

                    <div className="project-filter large">
                        <div><span className="filter-option"></span> <p className="filter-name">E-commerce</p></div>
                        <div><span className="filter-option"></span> <p className="filter-name">Agency</p></div>
                        <div><span className="filter-option"></span> <p className="filter-name">Business & Portfolio</p></div>
                        <div><span className="filter-option"></span> <p className="filter-name">Hospitality</p></div>
                        <div><span className="filter-option"></span> <p className="filter-name">Education</p></div>
                    </div>
                </div>
                <div className="project-div">
                    {projects}
                </div>
            </div>
        </PortfolioWrap>
    )
}

export default Portfolio;
