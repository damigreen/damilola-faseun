import React from 'react';
import useForm from 'hooks/formHook';
import Testimonial from './Testimonial';
import {
    ContactWrap,
    TestimonialSection,
    FormWrap,
    FieldsWrap,
} from './ContactStyled';



const Contact = () => {

    const fullName = useForm('text');
    const email = useForm('email');
    const subject = useForm('text');
    const company = useForm('text');
    const message = useForm('text');

    const name = '../../../icons/person.svg';



    return(
      <ContactWrap>
        <div className="contact-wrap">
          <FieldsWrap>
            <div className="fields-wrap">
                <h3>Get in touch</h3>

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
          </FieldsWrap>

          <TestimonialSection>
            <div className="testimonial-section">
              <Testimonial />
            </div>
          </TestimonialSection>

        </div>
      </ContactWrap>
    )
}


export default Contact;
