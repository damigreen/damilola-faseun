import styled, { css } from 'styled-components';


export const FlexDrip = styled.div`
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
export const ButtonSecondary = styled.button`
    padding: 0.4961rem 1rem;
    height: auto;
    width: 9rem;
    color: var(--white-two);
    text-transform: uppercase;
    font-size: 0.88982rem;
    border-radius: 3px;

    @media only screen and (max-width: 460px) {
    font-size: 0.79882rem;
    width: 7.9rem;
    height: 2.4rem;
} 
`

export const FlexRow = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0 auto;
    width: 90%;
    padding: 31px 0;
    border: 1px solid brown;
    justify-content: center;
    align-items: center;
`
