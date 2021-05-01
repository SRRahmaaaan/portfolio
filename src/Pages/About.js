import React from 'react'
import Title from '../Components/Title'
import DetailsSection from './DetailsSection'

const About = () => {
    return (
        <section className="About">
            <Title title={"About Me"} span={"About Me"} />
            <DetailsSection />
        </section>
    )
}

export default About;
