import styled from 'styled-components';


export const ContactWrap = styled.div`
    background-color: #1F1A28;
    display: flex;
    justify-content: center;
    align-items: center;

    @media only screen and (min-width: 1200px) {
        height: 750px;
    }

    .contact-wrap {
        margin: 0 auto;
        width:85%;
        /* width: 100%; */
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
        @media only screen and (min-width: 1200px) {
            height: auto;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-start;
        }
    }
`

export const FieldsWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex: 0 0 100%;
    /* max-width: 500px; */
    margin: 0 auto;
    max-width: 700px;
    /* border: 1px solid green; */
    color: #F2F2F2;
    margin-bottom: 1.9rem;

    @media only screen and (min-width: 1200px) {
        /* align-items: flex-start; */
        /* margin-left:0; */
        max-width: 50%;
        align-self: flex-start;
        justify-self: flex-start;
    }

    h3 {

        @media only screen and (min-width: 1200px) {
            text-align: left;
            align-self: flex-start;
            padding: 1rem 0.54462rem;
            padding-bottom: 0;
            margin-left: 1rem;
            font-size: 2.4rem;
            margin-bottom: 1rem;
            font-weight: 500;
        }
        
    }
`

export const FormWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: 100%;
    padding: 1rem 0.54462rem;
    vertical-align: center;

    @media only screen and (min-width: 1200px) {
        align-items: flex-start;
    }    


    form {
        width: 100%;
    }

    label {
        margin-left: 12px;
    }

    input {
        width: 95%;
        border: none;
        background-color: inherit;
        border-bottom: 1px solid #C4C4C4;
        padding: 0.345rem 1rem;
        padding-bottom: 1.3rem;
        padding-left: 0;
        margin: 1.89rem 0.783rem 0 0;

        :first-child {
            margin-top: 0;
        }

        ::placeholder {
            color: #E0E0E0;
        }
    }

    input[type="text"] {
    }

    input[type="email"] {
    }
`

export const TestimonialSection = styled.div`
    margin-bottom: 1rem;
    margin-top: 3.8634rem;
`
