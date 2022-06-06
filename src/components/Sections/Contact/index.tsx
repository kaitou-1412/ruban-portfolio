import React, { useState, useEffect } from "react";
import './index.css';

const Contact = () => {

    const [submitting, setSubmitting] = useState(false)
    const handleSubmit = (event: any) => {
        event.preventDefault()
        const name = event.target.name.value;
        const subject = event.target.subject.value;
        const message = event.target.message.value;
        console.log('Name', name)
        console.log('Subject', subject)
        console.log('Message', message)
        event.target.name.value = "";
        event.target.subject.value = "";
        event.target.message.value = "";
        // alert('You have submitted the form.')
        // setSubmitting(true)
        // setTimeout(() => {
        //     setSubmitting(false);
        //   }, 3000)
    }

    return(
        <div className="contact-container">
            <div className="contact-title">Let's work together.</div>
            <div className="contact-description">I am available for work. Connect with me using the contact form or <strong>send me an email</strong>.</div>
            <form className="contact-form" onSubmit={handleSubmit}>
                <input id="name" type="text" className="input-field" name="name" placeholder="Name" />
                <input id="subject" type="text" className="input-field" name="subject" placeholder="Subject" />
                <textarea id="message" className="input-field textarea-field" name="message" placeholder="Message" />
                <input type="submit" value="Submit" className="submit-button" />
            </form>
        </div>
    )
}

export default Contact