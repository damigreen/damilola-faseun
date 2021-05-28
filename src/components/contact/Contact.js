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
    const phone = useForm('text');
    const message = useForm('text');


    return(
      <ContactWrap>
        <div className="contact-wrap">
          <FieldsWrap>
                <h3>Get in touch</h3>

                <FormWrap>
                    <form className="form">
                      <div className="input-box">
                        <label htmlFor="fullname">FullName  *</label>
                        <input {...fullName.form} className="input-field fn" />

                      </div>

                      <div className="input-box" style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start'}}>
                        <div style={{ flex: '0 0 60%'}}>
                          <label htmlFor="email">Email  *</label>
                          <input {...email.form}  className="input-field " />
                        </div>

                        <div style={{marginLeft: '2.248rem', flex: '0 0 34%'}}>
                          <label htmlFor="company">Company  *</label>
                          <input {...phone.form} className="input-field" />
                        </div>
                      </div>

                      <div className="input-box">
                        <label htmlFor="subject">Subject  *</label>
                        <input {...subject.form} className="input-field sub" />

                      </div>

                      <div className="input-box">
                        <label htmlFor="message">Message  *</label>
                        <input {...message.form} className="input-field fn" />
                      </div>

                      <div className="attach-box">
                        <div className="attach-file"></div>
                        <p className="attach-text">Add an attachment</p>
                      </div>

                      <div className="submit-box">
                        <button className="btn-submit" type="submit">Send message</button>
                      </div>
                    </form>
                </FormWrap>
          
          </FieldsWrap>

          <TestimonialSection>
              <Testimonial />
          </TestimonialSection>

        </div>
      </ContactWrap>
    )
}


export default Contact;
