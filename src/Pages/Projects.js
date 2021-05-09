import React from 'react'
import ProjectCard from '../Components/ProjectCard'
import Title from "../Components/Title"
import Teachcom from "../Images/techcom.PNG"
import Foodbazar from "../Images/foodbazar.png"
import PremierLeague from "../Images/premier.png"
import Vanue from "../Images/venue.png"

const Projects = () => {
    return (
        <section>
            <div className="title">
                <Title title={"My Projects"} span={"My Projects"} />
            </div>
            <div className="projects-container">
                <ProjectCard
                    pic={Teachcom}
                    name={"TechCom"}
                    live={"https://teachcom-aa9f4.web.app/"}
                    frontCode={"https://github.com/SRRahmaaaan/techcom-front-end"}
                    backCode={"https://github.com/SRRahmaaaan/techcom-back-end"}
                />
                <ProjectCard 
                    pic={Foodbazar} 
                    name={"FoodBazar"} 
                    live={"https://food-bazar-b4116.web.app/"} 
                    frontCode={"https://github.com/SRRahmaaaan/food-bazar-front-end"} 
                    backCode={"https://github.com/SRRahmaaaan/food-bazar-back-end"} 
                />
                <ProjectCard 
                    pic={PremierLeague} 
                    name={"English Premier League"}
                    live={"https://premier-leagueee.netlify.app/"} 
                    frontCode={"https://github.com/SRRahmaaaan/english-premier-league"} 
                />
                <ProjectCard 
                    pic={Vanue} 
                    name={"Vanue"}
                    live={"https://srrahmaaaan.github.io/venue/"} 
                    frontCode={"https://github.com/SRRahmaaaan/venue"} 
                />
            </div>
        </section>
    )
}

export default Projects
