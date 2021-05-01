import React from 'react'
import Title from "../Components/Title"
import ContactItem from '../Components/ContactItem'
import Phone from "../Images/smartphone.png";
import Email from "../Images/envelope.png";
import Location from "../Images/pin.png";
import ContactForm from '../Components/ContactForm';

const Contact = () => {
    return (
        <>
            <div className="title">
                <Title title={"Contact Me"} span={"Contact Me"} />
            </div>
            <section className="ContactPage">
            <div className="form-sect">
                <ContactForm />
            </div>
            <div className="contact-sect">
                <ContactItem icon={Phone} text={"+880 1609 274 946"} title={"Phone"}/>
                <ContactItem icon={Email} text={"sydurrahman2699@gmail.com"} title={"Email"}/>
                <ContactItem icon={Location} text={"Bason Sarak - Gazipur, Dhaka."} title={"Location"}/>
            </div>
            </section>
        </>
    )
}

export default Contact
