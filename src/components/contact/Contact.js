import React from 'react';
import styled from 'styled-components';
import {
    ContactWrapper,
} from './ContactStyled';
import useForm from 'hooks/formHook';

// const FormWrap = styled.div`
const FormWrap = styled.form`
    color: red;
    display: inline-block;
`

const Contact = () => {

    const fullName = useForm('text');
    const email = useForm('email');
    const subject = useForm('text');
    const company = useForm('text');
    const message = useForm('text');

    const name = '../../../icons/person.svg';



    return(
      <ContactWrapper>
        <div className="contact-wrapper">
          <div className="form-wrapper">
            <h3>Get in touch</h3>
            <div>
              <FormWrap>
                <form>
                  <div>
                    <label for="fullname">Full name <span>*</span></label>
                    <input {...fullName.form} className="input-field fn" />
                  </div>
                  <div>
                    <label for="email">Email <span>*</span></label>
                    <input {...email.form} className="input-field " />
                  </div>
                  <div>
                    <label for="subject">Subject <span>*</span></label>
                    <input {...subject.form} className="input-field sub" />
                  </div>
                  <div>
                    <label for="company">Company </label>
                    <input {...company.form} className="input-field" />
                  </div>
                  <div>
                    <label for="message">Message <span>*</span></label>
                    <textarea {...message.form} className="input-field fn" />
                  </div>
                </form>
              </FormWrap>
            </div>
          </div>
        </div>
      </ContactWrapper>
    )
}


export default Contact;
