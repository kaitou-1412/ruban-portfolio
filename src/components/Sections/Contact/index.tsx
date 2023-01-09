import React, { useState, useEffect } from "react";
import './index.css';
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import '../../../../node_modules/react-toastify/dist/ReactToastify.css';

const Contact = () => {

    const [submitting, setSubmitting] = useState(false)
    const handleSubmit = (event: any) => {
        event.preventDefault()
        const templateParams = {
            Name: event.target.name.value,
            Subject: event.target.subject.value,
            Message: event.target.message.value
        }
        const publicKey = String(process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
        const serviceID = String(process.env.REACT_APP_SERVICE_ID)
        const templateID = String(process.env.REACT_APP_TEMPLATE_ID)
        console.log('success')
        emailjs.init(publicKey)
        emailjs.send(serviceID, templateID, templateParams)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                toast.success('Email sent successfully !!!', {
                    position: "top-center",
                    theme: "light",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
            }, (err) => {
                console.log('FAILED...', err);
            })
        event.target.name.value = ""
        event.target.subject.value = ""
        event.target.message.value = ""
    }

    return(
        <div className="contact-container">
            <ToastContainer
                position="top-center"
                theme="light"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <div className="contact-title">Let's work together.</div>
            <div className="contact-description">I am available for work. Connect with me using the contact form or <strong>send me an email</strong>:</div>
            <form className="contact-form" onSubmit={handleSubmit}>
                <input id="name" type="text" className="input-field" name="name" placeholder="Name" />
                <input id="subject" type="text" className="input-field" name="subject" placeholder="Subject" />
                <textarea id="message" className="input-field textarea-field" name="message" placeholder="Enter your email and message" />
                <input type="submit" value="Submit" className="submit-button" />
            </form>
        </div>
    )
}

export default Contact