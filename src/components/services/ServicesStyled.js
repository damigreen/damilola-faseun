import styled, { css } from 'styled-components'
import {
    borderStyle,
    flexColumnWrap,
    textStyle,
} from '../../AppStyled';



const servicesRow = `
`

export const  ServicesWrapper = styled.div`
    /* margin-top: 300px; */
    box-sizing: border-box;
` 

export const ServicesRow = styled.div`
    ${servicesRow};
    width: 100%;
    margin: 0;
    padding: 0;

    .services-box {
        display: flex;
        flex-flow: column wrap;
        width: 100%;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .services-intro {
        padding: 20px 30px;
        font-size: 1.901rem;
    }

    .my-services-header {
        font-size: 1.14561rem;
        padding-top: 20px;
        padding-bottom: 20px;
        border-top: 1px solid rgba(49,49,49,0.1);
        border-bottom: 1px solid rgba(49,49,49,0.1);
        text-transform: uppercase;
        letter-spacing: 0.120rem;
    }

    .services-items {
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        width: 100%;
        /* max-width: 90rem; */
        border: 1px solid red;


    }

    .services-data {
        ${flexColumnWrap};
        padding: 40px;
        /* margin: 7px 10px; */
        border-bottom: 1px solid rgba(49,49,49,0.1);
        border-right: 1px solid rgba(49,49,49,0.1);

        @media only screen and (min-width : 500px) and (max-width : 800px) {
            flex: 0 0 50%;
            /* border: 1px solid blue; */
        }

        @media only screen and (min-width : 800px) {
            flex: 0 0 33.333%;
            /* border: 1px solid blue; */
        }

        .service-img {
            max-width: 280px;
            width: 100%;
        }

        h4 {
            font-size: 1.03rem;
            text-transform: uppercase;
            letter-spacing: 0.120rem;
            /* background: red; */
            text-align: center;
            /* padding: 0.4rem 0.7rem; */
            /* align-self: flex-start; */
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
