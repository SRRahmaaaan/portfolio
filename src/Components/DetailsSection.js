import React from 'react'
import aboutImage from "../Images/about.jpg"

const DetailsSection = () => {
    return (
        <div className="DetailsSection">
            <div className="image">
                <img src={aboutImage} alt="aboutImage"/>
            </div>
            <div className="about-info">
                <h4>I am <span>Sydur Rahman</span></h4>
                <p>
                    I am Sydur Rahman. I am a progressive web developer. I started my journey as a developer couple of months now and I started enjoying this. I love coding and very passionate about my work. My favorite sports cricket and enjoying eating food like KACCI Biryani😋.
                </p>
                <button className="btn">Download CV</button>
            </div>
        </div>
    )
}

export default DetailsSection
