import React from 'react'

const ProjectCard = ({pic, name, live, frontCode, backCode}) => {
    return (
        <div className="ProjectCard">
            <div className="imgbx">
                <img src={pic} alt="projectPicture"/>
            </div>
            <div className="desc">
                <h4>{ name }</h4>
                <div className="sources">
                    <button className="src-btn">
                        <a href={live} target="_blank" rel="noreferrer">Live Site</a>
                    </button>
                    <button className="src-btn">
                        {
                            backCode ? <a href={frontCode} target="_blank" rel="noreferrer">Front-End Code</a> :
                            <a href={frontCode} target="_blank" rel="noreferrer">Source Code</a>
                        }
                    </button>
                    {backCode &&
                        <button className="src-btn">
                            <a href={backCode} target="_blank" rel="noreferrer">Back-End Code</a>
                        </button>
                    }
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
