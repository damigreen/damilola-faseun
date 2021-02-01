import React from 'react';
import styled from 'styled-components';
// import imageFrame from 'images/image-frame.png';

const PortfolioWrap = styled.div`
    border: 4px solid green;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    /* background-color: red; */
`

const TextWrap = styled.div`
    
`

const ImageWrap = styled.div`
    /* width: 300px;
    height: 300px; */
`


const Portfolio = (data) => {
    console.log(data);

    const imageFrame = 'images/image-frame.png';

    return(
        <PortfolioWrap>
            <TextWrap>
                <h1>Selected Works</h1>
            </TextWrap>
            <ImageWrap>
                <img src={imageFrame} />
            </ImageWrap>
        </PortfolioWrap>
    )
}

export default Portfolio;
