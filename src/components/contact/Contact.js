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
                    <form>
                      <div>
                        <label for="fullname"></label>
                        <input {...fullName.form} placeholder="Full Name  *" className="input-field fn" />

                      </div>

                      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                        <label for="email"></label>
                        <input {...email.form} placeholder="Email  *" className="input-field " />

                        <label for="company"></label>
                        <input {...phone.form} placeholder="Phone" className="input-field" />
                      </div>

                      <div>
                        <label for="subject"></label>
                        <input {...subject.form} placeholder="Subject *" className="input-field sub" />

                      </div>

                      <div>
                        <label for="message"></label>
                        <input {...message.form} placeholder="Message  *" className="input-field fn" />
                      </div>

                      <div>
                        <p><span>clip</span> Add an attachment</p>
                      </div>

                      <div>
                        <button type="submit">Send message</button>
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
