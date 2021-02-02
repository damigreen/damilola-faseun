import React from 'react';


const Contact = () => {

    return(
        <div>
            <h1>Contact me</h1>
            <form>
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
            </form>
        </div>
    )
}


export default Contact;
