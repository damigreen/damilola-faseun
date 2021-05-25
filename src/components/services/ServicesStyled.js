import styled from 'styled-components'
import {
    textStyle,
    HeadingPrimary,
    HeadingSecondary,
    HeadingTertiary,
} from '../../AppStyled';



export const  ServicesWrapper = styled.div`
    box-sizing: border-box;
    padding-bottom: 4rem;
    background-color: #F8F8F8;
    /* background-color: #f4f3f0; */
` 

export const ServicesRow = styled.div`
    width: 100%;
    margin: 0;
    padding: 0;

    .services-box {
        display: flex;
        flex-flow: column wrap;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    
    .my-services-header {
        width: 100%;
        font-size: 1.90643rem;
        padding-top: 20px;
        padding-bottom: 20px;
        border-top: 1px solid rgba(49,49,49,0.1);
        border-bottom: 1px solid rgba(49,49,49,0.1);
        text-transform: uppercase;
        letter-spacing: 0.120rem;
        margin-bottom: 0;
        margin-top: 0;
        text-transform: uppercase;
        ${HeadingSecondary};
        color: #1d3030;
    }

    .services-items {
        display: flex;
        flex-direction: row;
        flex-flow: row wrap;
        justify-content: flex-start;
        justify-content: center;
        /* align-items: flex-start; */
        /* width: 100%; */
    }

    .services-data {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        padding: 40px;
        /* width: 100%; */
        /* margin: 7px 10px; */
        border-bottom: 1px solid rgba(49,49,49,0.1);
        border-right: 1px solid rgba(49,49,49,0.1);

        @media only screen and (min-width: 500px) and (max-width: 800px) {
            flex: 1 1 25%;
            /* flex-basis: 30%; */
        }

        @media only screen and (min-width: 800px) {
            flex: 1 1 20%;

        }

        @media only screen and (min-width: 1639px) {
            flex: 1 1 28%;
            
        }

        .service-img {
            max-width: 280px;
            width: 100%;
        }

        h4 {
            font-size: 1.03rem;
            text-transform: uppercase;
            letter-spacing: 0.120rem;
            text-align: center;
        }

        .horizontal-line {
            display: block;
            width: 50px;
            height: 1px;
            margin: 20px auto;
            color: #313131;
            background: #313131;
            opacity: 0.5;
        }

        p {
            ${textStyle};
            max-width: 800px;
            margin: 20px auto;
        }
    }
`
