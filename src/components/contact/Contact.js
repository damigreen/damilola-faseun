import React from 'react';
import styled from 'styled-components';

// const FormWrap = styled.div`
const FormWrap = styled.form`
    color: red;
    display: inline-block;
`

const Contact = () => {

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
        </div>
    )
}


export default Contact;
