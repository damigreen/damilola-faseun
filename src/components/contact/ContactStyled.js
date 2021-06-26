import styled from 'styled-components';


export const ContactWrap = styled.div`
    background-color: #344247;
    display: flex;
    justify-content: center;
    align-items: center;

    @media only screen and (min-width: 1200px) {
        height: 750px;
    }

    .contact-wrap {
        margin: 0 auto;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 55px 0;

        
        @media only screen and (min-width: 997px) {
            width: 100%;
            max-width: 74rem;
            height: auto;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-start;
            padding: 60px 0 80px 0;
        }
    }
`

export const FieldsWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: 90%;
    color: #F2F2F2;
    margin-bottom: 1.9rem;

    @media only screen and (min-width: 997px) {
        max-width: 48%;
        align-self: flex-start;
        justify-self: flex-start;
    }

    h3 {
        font-size: 2.324rem;
        padding: 0.7381rem 0.954462rem;
        text-align: left;
        margin-bottom: 0;
        align-items: flex-start;
        justify-self: flex-start;
        width: 100%;
        margin-top: 0;


        @media only screen and (min-width: 997px) {
            align-self: flex-start;
            padding: 0.7381rem 0.54462rem;
            padding-bottom: 0;
            font-size: 2.4rem;
            margin-bottom: 1rem;
            font-weight: 700;
            margin-top: 0;
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


    .form {
        width: 100%;



        div.input-box {
            margin-bottom: 2.9296772rem;
            position: relative;
        }

        label {
            position: absolute;
            bottom: 7px;
            font-size: 0.875rem;
            color: #C0BFC3
        }

        input {
            width: 95%;
            border: none;
            background-color: inherit;
            border-bottom: 1px solid #C4C4C4;
            padding-left: 0;

            :first-child {
                margin-top: 0;
            }

            ::placeholder {
                color: #E0E0E0;
            }
        }

        input[type="text"]:focus {
            background-color: navy;
        }

        .input-field {
            width: 100%;
        }

        .attach-box {
            display: flex;
            flex-direction: row;
            align-items: center;
            margin-bottom: 1.7032rem;


            .attach-file {
                border-radius: 50%;
                background-size: 25px;
                background: url('../../../icons/attachment.png');
                background-position: center;
                background-color: #F2F2F2;
                background-repeat: no-repeat;
                height: 40px;
                width: 40px;
            }

            .attach-file::after, .attach-file::before {
                content: '';
            }

            .attach-text {
                margin-left: 7px;
                padding: 0.533rem 1rem;
            }

        }

        .submit-box {

            .btn-submit {
                background-color: #fff;
                border-radius: 7px;
                border: none;
                color: #1e1d28;
                display: inline-block;
                font-size: 1rem;
                font-weight: 600;
                line-height: 1.3!important;
                margin: 0;
                min-width: 220px;
                padding: 20px!important;
                transition-duration: .3s;
                transition-property: background-color,color;
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
                vertical-align: middle;
                white-space: nowrap;
            }
        }
    }


`

export const TestimonialSection = styled.div`
    margin-bottom: 1rem;
    margin-top: 3.8634rem;
    margin: 0 auto;
    width: 90%;

    @media only screen and (min-width: 997px) {
        max-width: 42%;
    }

`
