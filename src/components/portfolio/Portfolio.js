import React from 'react';
import styled from 'styled-components';
import {
    PortfolioWrap,
    ProjectWrap,
    ProjectWrapLeft,
    ProjectWrapRight,
    TextWrap,
    ImageWrap,

} from './PortfolioStyled';


const showFilterWidget = () => {
    console.log('show filter')
}

const ProjectsLeft = ({i, p}) => {
    return (
        <ProjectWrapLeft key={i}>
            <div className="project left">
                <ImageWrap>
                    <div className="image-wrap">
                        <img alt="Image for projects done" src={`../../../images/${p.image}`} />
                    </div>
                </ImageWrap>

                <TextWrap>
                    <p className="project-title">{p.title}{`This image has the value ${i}`}</p>
                    <p className="project-category">{p.categories}</p>
                </TextWrap>
            </div>
        </ProjectWrapLeft>
    )
}

const ProjectsRight = ({i, p}) => {
    return (
        <ProjectWrapRight key={i}>
            <div className="project right">
                <ImageWrap>
                        <img alt="Image for projects done" src={`../../../images/${p.image}`} />
                </ImageWrap>

                <TextWrap>
                    <p className="project-title">{p.title} {`This image has the value ${i}`}</p>
                    <p className="project-category">{p.categories}</p>
                </TextWrap>
            </div>
        </ProjectWrapRight>
    )
}


const Portfolio = (portfolio) => {
    
    if (portfolio.data === undefined) {
        return <div>Loading.....................</div>
    }
    
    const projects = portfolio.data.projects.map((p, i) => {
        return (
            <ProjectWrap>
                <div className="project-wrap">
                    { i%2 ? <ProjectsLeft p={p} i={i} /> : <ProjectsRight p={p} i={i} /> }
                </div>
            </ProjectWrap>
        )
    });
    
    return(
        <PortfolioWrap>
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
