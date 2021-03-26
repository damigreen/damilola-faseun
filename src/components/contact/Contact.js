import React from 'react';
import styled from 'styled-components';
import {
    ContactWrapper,
    ContactIntro,
    ContactRow,
} from './ContactStyled';


// const FormWrap = styled.div`
const FormWrap = styled.form`
    color: red;
    display: inline-block;
`

const Contact = () => {

    const fullName = useForm('text');
    const email = useForm('email');
    const phone = useForm('text');
    const company = useForm('text');
    const message = useForm('text');

    const name = '../../../icons/person.svg';



    return(
        <div>
            <h1>Contact me</h1>
            <FormWrap>
                    <label for="Full Name">Full Name</label>
                    <input type="text" name="Full Name" />

                    <label for="Email">Email</label>
                    <input type="text" name="Email" />

                    <label for="Phone">Phone Number</label>
                    <input type="text" name="Phone" />

                    <label for="subject">Subject</label>
                    <input type="text" name="Full Name" />

                    <label for="message">Message</label>
                    <input type="text" name="Message" />
            </FormWrap>

            <ContactWrapper>

          <ContactIntro>
            <div className="contact-info">
              {/* <h3 className="partner-heading">Partner with us</h3> */}
              <p>
                We assist our clients in planning, implementing and executing the roadmap necessary to bring
                their ideas to life through our wealth of digital resources and research data.
              </p>
              {/* <p>We are here for you.<span></span> </p> */}
              <Button className="btn-secondary" variant="outline-success">partner with us</Button>
            </div>
          </ContactIntro>



          <ContactRow>
            <h3>Get in Touch</h3>
            <div className="horizontal-border"></div>
            <div>
              <Form>
                <Form.Group className="form-group" controlId="formGroupName">
                    <div className="form-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                        </svg>
                    </div>
                    <Form.Control { ...fullName.form } className="form-name" src={name} placeholder="Name" />
                </Form.Group>

                <Form.Group className="form-group" controlId="formGroupEmail">
                    <div className="form-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>
                        </svg>
                    </div>
                    <Form.Control { ...email.form } className="form-email" type="email" placeholder="Email Address" />
                </Form.Group>

                <Form.Group className="form-group" controlId="formGroupPhone">
                    <div className="form-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-plus" viewBox="0 0 16 16">
                            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                            <path fill-rule="evenodd" d="M12.5 1a.5.5 0 0 1 .5.5V3h1.5a.5.5 0 0 1 0 1H13v1.5a.5.5 0 0 1-1 0V4h-1.5a.5.5 0 0 1 0-1H12V1.5a.5.5 0 0 1 .5-.5z"/>
                        </svg>
                    </div>
                    <Form.Control { ...phone.form } className="form-phone" type="text" placeholder="Phone number" />
                </Form.Group>

                <Form.Group className="form-group" controlId="formGroupCompany">
                    <div className="form-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                            <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
                        </svg>
                    </div>
                    <Form.Control { ...company.form } className="form-company" type="text" placeholder="Company name" />
                </Form.Group>

                <Form.Group className="form-group" controlId="formGroupMessage">
                    <Form.Control { ...message.form } className="form-message" as="textarea" rows={5} type="text" placeholder="Enter your message..." />
                </Form.Group>
              </Form>
            </div>

          </ContactRow>
        </ContactWrapper>

        </div>
    )
}


export default Contact;
