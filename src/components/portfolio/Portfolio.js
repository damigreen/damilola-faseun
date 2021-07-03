import React, { useState, useEffect } from 'react';
import {
    PortfolioWrap,
    ProjectWrap,
    ProjectWrapLeft,
    ProjectWrapRight,
    TextWrap,
    ImageWrap,
} from './PortfolioStyled';
import { Link } from 'react-router-dom';



const ProjectsLeft = ({i, p}) => {
  return (
    <ProjectWrapLeft key={i}>
        <a href={p.url} target="_blank" rel='noreferrer' className="project left">
            <ImageWrap>
                <div className="image-wrap">
                    <img alt="Image for projects done" src={`../../../images/${p.image}`} />
                </div>
            </ImageWrap>

            <TextWrap>
                <p className="project-title">{p.title}</p>
                <p className="project-category">{p.categories}</p>
            </TextWrap>
        </a>
    </ProjectWrapLeft>
  )
}

const ProjectsRight = ({i, p}) => {
    return (
        <ProjectWrapRight key={i}>
            <a href={p.url}  target="_blank" rel='noreferrer' className="project right">
                <ImageWrap>
                        <img alt="Image for projects done" src={`../../../images/${p.image}`} />
                </ImageWrap>

                <TextWrap>
                    <p className="project-title">{p.title}</p>
                    <p className="project-category">{p.categories}</p>
                </TextWrap>
            </a>
        </ProjectWrapRight>
    )
}


const Portfolio = (portfolio) => {
    const [portfolioData, setPortfolioData] = useState([]);
    const [isActive, setActive] = useState(false);

    useEffect(() => {
        if (portfolio.data) {
            setPortfolioData(portfolio.data.projects);
        }
    }, [portfolio]);
    
    if (portfolio.data === undefined) {
        return <div>Loading.....................</div>
    }

    const handleFilter = (type) => {
        console.log(portfolio.data.projects)
        if (type === 'All') {
            setPortfolioData(portfolio.data.projects);
            const ele = document.querySelector('.all-filter');
            if (ele) {
                ele.classList.add('filter-click');
                ele.style.backgroundColor = '#ffffff';
                const otherEle = document.querySelectorAll('.filter-option');
                if (otherEle) {
                    for (var i = 0; i < otherEle.length; i++) {
                        otherEle[i].classList.add('filter-unclick');
                    }    
                }
            }
        } else {
            const match = portfolio.data.projects.filter(p => {
                return p.cat.includes(type) ? p : null;
            });
            setPortfolioData(match);
            const ele = document.querySelector('.all-filter');
            const eleOne = document.querySelector(`.${type}-filter`.toLocaleLowerCase());
            const otherEle = document.querySelectorAll('.filter-option');
            
            if (otherEle && eleOne) {
                for (var i = 0; i < otherEle.length; i++) {
                    if (otherEle[i] !== eleOne) {
                        otherEle[i].classList.add('filter-unclick');
                    }
                }
                eleOne.classList.add('filter-click');
                eleOne.classList.remove('filter-unclick');
            }
            if (ele) {
                ele.classList.remove('filter-click');
                ele.style.backgroundColor = 'inherit'
            }
        }
    }
    
    const projects = portfolioData.map((p, i) => {
        return (
            <ProjectWrap key={i}>
                <div className="project-wrap">
                    { i%2 ? <ProjectsLeft p={p} i={i} /> : <ProjectsRight p={p} i={i} /> }
                </div>
            </ProjectWrap>
        )
    }).slice(0, 4);

    let projectFilter = document.querySelector('.project-filter');
    if (projectFilter) {
        window.matchMedia("(min-width: 767px)").matches ? projectFilter.style.flexDirection = 'row' : projectFilter.style.flexDirection = 'column';
    }
    const showFilterWidget = () => {
        console.log('show filter');
        // setActive(!isActive);
        const projectFilter = document.querySelector('.project-filter');
        const filter = document.querySelector('.filter');
        if (isActive === false && projectFilter && filter) {
            projectFilter.style.display = 'flex';
            console.log(window.matchMedia("(max-width: 767px)").matches);
            window.matchMedia("(min-width: 767px)").matches ? projectFilter.style.flexDirection = 'row' : projectFilter.style.flexDirection = 'column';
            // window.matchMedia("(min-width: 700px)") ? projectFilter.style.flexDirection = 'column' : projectFilter.style.flexDirection = 'row';
            projectFilter.classList.add('filter-style');
            filter.style.display = 'flex';
            filter.style.flexDirection = 'column';
            // setActive(true);
        }

        if (isActive === false) {

        }

    }
    
    
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
                    <div className="filter-box"><span className="filter-by">Filter by</span> <span className="filter-button" onClick={showFilterWidget}><div className="filter-icon" alt='filter icon' ></div></span></div>

                    <div className="project-filter large small-filter">
                        {/* <div className="filter-option all-filter" onclick={() => handleFilter('All')}><span></span> <p className="filter-name">All</p></div> */}
                        <div className="filter-option all-filter" onClick={() => handleFilter('All')}><span></span> <p className="filter-name">All</p></div>
                        <div className="filter-option ecommerce-filter" onClick={() => handleFilter('Ecommerce')}><span></span> <p className="filter-name">E-commerce</p></div>
                        <div className="filter-option agency-filter" onClick={() => handleFilter('Agency')}><span></span> <p className="filter-name">Agency</p></div>
                        <div className="filter-option portfolio-filter" onClick={() => handleFilter('Portfolio')}><span></span> <p className="filter-name">Business & Portfolio</p></div>
                        <div className="filter-option design-filter" onClick={() => handleFilter('Design')}><span></span> <p className="filter-name">Design</p></div>
                        <div className="filter-option hospitality-filter" onClick={() => handleFilter('Hospitality')}><span></span> <p className="filter-name">Hospitality</p></div>
                        <div className="filter-option education-filter" onClick={() => handleFilter('Education')}><span></span> <p className="filter-name">Education</p></div>
                    </div>
                </div>
                <div className="project-div">
                    {projects}
                </div>
                <Link to='/portfolio-all'><button className="portfolio-button">See all works</button></Link>
            </div>
        </PortfolioWrap>
    )
}

export default Portfolio;
