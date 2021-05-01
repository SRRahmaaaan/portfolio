import React from 'react'
import profilePic from "../Images/profile.svg"
import {NavLink} from "react-router-dom"

const Navbar = () => {
    return (
        <section className="NavBar">
            <nav className="nav">
                <div className="profile">
                    <img src={profilePic} alt="profilePic"/>
                </div>
                <ul className="nav-items">
                    <li className="nav-item"><NavLink activeClassName="active" exact to="/">Home</NavLink></li>
                    <li className="nav-item"><NavLink activeClassName="active" exact to="/projects">Projects</NavLink></li>
                    <li className="nav-item"><NavLink activeClassName="active" exact to="/blogs">Blogs</NavLink></li>
                    <li className="nav-item"><NavLink activeClassName="active" exact to="/about">About</NavLink></li>
                    <li className="nav-item"><NavLink activeClassName="active" exact to="/contact">Contact</NavLink></li>
                </ul>
                <footer className="footer">
                    <p>@{ new Date().getFullYear()} Sydur Rahman</p>
                </footer>
            </nav>
        </section>
    )
}

export default Navbar
