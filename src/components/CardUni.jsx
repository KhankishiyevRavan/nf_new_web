import React from 'react'
import { Link } from 'react-router-dom'
import "./css/CardUni.css"
const CardUni = ({ university, lang }) => {
    return (
        <Link className="article-card" key={university?.id} to={`/country/university/${university?.id}`}>
            <div className="content">
                <p className="date">{lang === "az" ? university?.city : university?.city_en}</p>
                <p className="title">{lang === "az" ? university?.name : university?.name_en}</p>
            </div>
            <img src={`${university?.image_url}`} alt="article-cover" />
        </Link>
    )
}

export default CardUni