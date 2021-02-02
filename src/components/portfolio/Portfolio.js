import React from 'react';
import styled from 'styled-components';

const PortfolioWrap = styled.div`
    border: 4px solid green;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    /* background-color: red; */
`

const TextWrap = styled.div`
    
`

const ImageWrap = styled.div`
    /* width: 300px;
    height: 300px; */
`


const Portfolio = (portfolio) => {
    
    if (portfolio.data === undefined) {
        return <div>Loading.....................</div>
    }
    
    const imageFrame = 'images/image-frame.png';
    
    const projects = portfolio.data.projects.map(p => {

        return(
            <div>
            <TextWrap>
                <p>{p.title}</p>
                <p>{p.categories}</p>
            </TextWrap>
            <ImageWrap>
                <img src={imageFrame} />
            </ImageWrap>
            </div>
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
