import React from 'react'
import { Link } from 'react-router-dom'
import "./css/CardUni.css"
const CardUni = ({university}) => {
    return (
        <Link className="article-card" key={university?.id} to={`/country/university/${university?.id}`}>
            <div className="content">
                <p className="date">{university?.city}</p>
                <p className="title">{university?.name}</p>
            </div>
            <img src={`${university?.image_url}`} alt="article-cover" />
        </Link>
    )
}

export default CardUni