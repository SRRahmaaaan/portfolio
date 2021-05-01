import React from 'react'

const ContactForm = () => {
    return (
        <div className="form-box">
            <h3>Shoot Me A Message</h3>
            <form>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Your Name"/>
                </div>
                <div className="form-group">
                    <input type="email" className="form-control" placeholder="Email"/>
                </div>
                <div className="form-group">
                    <textarea className="form-control area"  placeholder="Comments..."/>
                </div>
                <button type="submit" className="btn submit-btn">Send</button>
            </form>
        </div>
    )
}

export default ContactForm
