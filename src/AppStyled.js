import styled, { css } from 'styled-components';

export const FlexDrip = styled.div`
    /* align-items:  */
`

export const borderStyle = `
    border: 2px solid red;
`

export const flexColumnWrap = `
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`

export const flexRowWrap = `
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const textStyle = `
    font-weight: 400;
    color: #313131;
    border: 1px solid red;
`

export const HeadingPrimary = `
    font-size: 42px;
    font-weight: 700;
    color: #1d3030;

    @media only screen and (max-width: 1024px) {
        font-size: 36px;
    }
`

export const HeadingSecondary = `
    font-size: 24px;
    font-family: serif;
    font-weight: 400;
    color: #475E67;
`
export const HeadingTertiary = `
    margin: 0;
    padding: 0;
    font-size: 18px;
    font-weight: 500;
    color: gray;
    color: #4e5965;
`

export const HeroHeadingName = styled.h4`
    margin: 0 0 10px;
    padding: 0 0 5px;
`
export const HeroHeading =  styled.h1`
    margin: 0 0 10px;
    padding: 0 0 5px;
    /* font-size: 4rem; */
    font-size: calc(112.5% + 2.273vw);
    line-height: 1.42857;
    border: 1px solid gold;
`

export const HeroDescription = styled.p`
    margin: 0;
    padding: 0;
    font-size: 1.375rem;
    font-weight: 400;
    max-width: 600px;
    line-height: 31px;

    @media only screen and (max-width: 767px) {
        width: 90%;
        text-align: center;
        font-size: 0.9536rem;
    }
`
