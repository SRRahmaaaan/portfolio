import React from 'react'
import {faGithub, faLinkedinIn} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link} from "react-router-dom"

const HomePage = () => {
    return (
        <section className="HomePage">
            <header className="hero">
                <h1 className="hero-text">Hi, I am <span>Sydur Rahman</span></h1>
                <p className="sub-text">
                    I am a lazy person😉. I always think about how to solve a difficult problem in less time and easily. But I always try to learn new things. And welcome to my portfolio.
                </p>
                <div className="icons">
                    <Link className="icon-holder"><FontAwesomeIcon className="icon gh"
                    icon={faGithub} /></Link>
                    <Link className="icon-holder"><FontAwesomeIcon className="icon ln"
                    icon={faLinkedinIn} /></Link>
                </div>
            </header>
        </section>
    )
}

export default HomePage;
