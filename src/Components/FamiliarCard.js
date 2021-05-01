import React from 'react'

const FamiliarCard = ({data}) => {
    return (
        <div className="card">
            <img src={data.image} alt="logo"/>
        </div>
    )
}

export default FamiliarCard
