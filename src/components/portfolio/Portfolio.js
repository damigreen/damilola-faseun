import React from 'react';
import styled from 'styled-components';

const PortfolioWrap = styled.div`
    text-align: center;
    border: 1px solid green;
    padding: 5px;
    /* background color: */
`

const ProjectWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    flex-wrap: wrap;
`

const TextWrap = styled.div`
    border: 1px solid green;
`

/* Edit */
const ImageWrap = styled.div`
    width: 300px;
    height: 300px;
    border: 2px solid red;
    background: yellow;
`


const Portfolio = (portfolio) => {
    
    if (portfolio.data === undefined) {
        return <div>Loading.....................</div>
    }
    
    // const imageFrame = 'images/image-frame.png';
    const imageFrame = 'images/';
    
    const projects = portfolio.data.projects.map(p => {

        return(
            <ProjectWrap>
                <TextWrap>
                    <p>{p.title}</p>
                    <p>{p.categories}</p>
                </TextWrap>
                <ImageWrap>
                    <img src={imageFrame} />
                </ImageWrap>
            </ProjectWrap>
        )
    })
    
    return(
        <PortfolioWrap>
            <h1>Selected Works</h1>
            {projects}
        </PortfolioWrap>
    )
}

export default Portfolio;
