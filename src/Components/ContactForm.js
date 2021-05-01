import React from 'react'
import emailjs from "emailjs-com"

const ContactForm = () => {
    const sendEmail = (e) =>  {
        e.preventDefault();
        emailjs.sendForm('service_js79rgq', 'template_g0wlq3j', e.target, 'user_SabfjqIxsb0DCJ6951V7f')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }
    return (
        <div className="form-box">
            <h3>Shoot Me A Message</h3>
            <form onSubmit={sendEmail}>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Your Name" name="name" required/>
                </div>
                <div className="form-group">
                    <input type="email" className="form-control" placeholder="Email" name="email" required/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Subject" name="subject" required/>
                </div>
                <div className="form-group">
                    <textarea className="form-control area"  placeholder="Message..." name="message" required/>
                </div>
                <button type="submit" className="btn submit-btn">Send</button>
            </form>
        </div>
    )
}

export default ContactForm
