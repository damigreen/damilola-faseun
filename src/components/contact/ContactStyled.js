import { borderStyle } from 'AppStyled';
import styled, { css } from 'styled-components';


const noIconBorder = `
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    background-color: #cccccc;
    color: #ffffff;
`

export const ContactWrapper = styled.div`
    background-color: #F5F5F5;
    border-bottom: 1px solid #A1ACB3;
`

export const ContactIntro = styled.div`
    padding: 20px 10px;
    text-align: left;
    margin: 7px 0;
    /* background: #03658C; */
    background: #024959;
    color: #e6f7fe;
    margin-bottom: 20px;

    .contact-info {
        /* background: red; */
        display: flex;
        flex-direction: column;
    }

    h3.partner-heading {
        text-align: center;
        margin-top: 10px;
        margin-bottom: 30px;
    }

    p {
        font-size: 1.177rem;
        text-align: center;
        font-size: 22px;
        padding: 5px;
    }

    .btn-secondary {
        align-self: center;
        background: #f29f05;
        text-transform: uppercase;
        color: #333;
        border: none;
        font-size: 1.09rem;
        font-weight: 500;
        margin: 18px 30px;
        padding: 0.652rem;

        /* border-color: $blue; */
        border-color: blue;
  /* color: #fff; */
  /* box-shadow: 0 0 40px 40px $blue inset, 0 0 0 0 $blue; */
  box-shadow: 0 0 40px 40px $blue inset, 0 0 0 0 blue;
  transition: all 150ms ease-in-out;
  
  &:hover {
    /* box-shadow: 0 0 10px 0 $blue inset, 0 0 10px 4px $blue; */
    box-shadow: 0 0 10px 0 $blue inset, 0 0 10px 4px blue;
  }
}

    }
`

export const ContactRow = styled.div`
    text-align: left;
    padding: 30px;
    margin-bottom: 4.983rem;

    h3 {
        text-align: center;
    }

    .horizontal-border {
        margin: 0 auto;
        border: 1px solid gray;
        width: 20%;
        margin-top: 25px;
    }


    form {
        margin-top: 45px;
    }

    .form-group {
        display: flex;
        margin-top: 1.315rem;
    }

    .form-icon {
        /* margin-right: 20px; */
        display: block;
        /* width: 100%; */
        height: calc(1.5em + .75rem + 2px);
        padding: .375rem .75rem;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        color: #495057;
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid #ced4da;
        border-radius: .25rem;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    }


    .form-name {
        ${noIconBorder}
    }

    .form-email {
        ${noIconBorder}
    }

    .form-phone {
        ${noIconBorder}
    }

    .form-company {
        ${noIconBorder}
    }

    .form-message {
        ${noIconBorder}
    }
`
