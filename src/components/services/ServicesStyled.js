import styled, { css } from 'styled-components'
import {
    borderStyle,
    flexColumnWrap,
} from '../../AppStyled';



const servicesRow = `
`

export const  ServicesWrapper = styled.div`
    /* margin-top: 300px; */
    box-sizing: border-box;
` 

export const ServicesRow = styled.div`
    ${servicesRow};


    .services-box {
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

    .services-row {
        /* margin: 20px; */
    }

    .services-data {
        border: 1px solid red;
        ${flexColumnWrap};
        padding: 40px;
        border-bottom: 1px solid rgba(49,49,49,0.1);

        h4 {
            /* font-size: 1.03rem; */
            text-transform: uppercase;
            letter-spacing: 0.120rem;
            background: red;
        }

        div {
            line-height: 22px;
            margin: 20px auto;
        }
    }
`
