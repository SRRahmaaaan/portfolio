import React from 'react'

const SkillCard = ({ data }) => {
    return (
        <div className="card">
            <img src={data.image} alt="logo"/>
        </div>
    )
}

export default SkillCard
