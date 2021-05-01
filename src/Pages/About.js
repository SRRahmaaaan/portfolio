import React from 'react'
import Title from '../Components/Title'
import DetailsSection from '../Components/DetailsSection'
import SkillsSection from '../Components/SkillsSection'

const About = () => {
    return (
        <section className="About">
            <Title title={"About Me"} span={"About Me"} />
            <DetailsSection />
            <Title title={"My Skills"} span={"My Skills"} />
            <SkillsSection />
        </section>
    )
}

export default About;
