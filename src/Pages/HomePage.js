import React from 'react'
import {faGithub, faLinkedinIn} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const HomePage = () => {
    return (
        <section className="HomePage">
            <header className="hero">
                <h1 className="hero-text">Hi, I am <span>Sydur Rahman</span></h1>
                <p className="sub-text">
                    I am a lazy person😉. I always think about how to solve a difficult problem in less time and easily. But I always try to learn new things. And welcome to my portfolio.
                </p>
                <div className="icons">
                    <a href="https://github.com/SRRahmaaaan" target="_blank" rel="noreferrer" className="icon-holder">
                        <FontAwesomeIcon className="icon gh"icon={faGithub} />
                    </a>
                    <a href="https://www.linkedin.com/in/sydur-rahman/" target="_blank" rel="noreferrer" className="icon-holder">
                        <FontAwesomeIcon className="icon ln"icon={faLinkedinIn} />
                    </a>
                </div>
            </header>
        </section>
    )
}

export default HomePage;
