import React from 'react';
import "./css/CardNews.css";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const CardNews = ({ info }) => {
    const { i18n } = useTranslation(["news"]);

    return (
        <Link to={`/news/${info.id}`} className="news_card">
            <div className="news_card_image">
                <img
                    src={info?.image_url}
                    alt=""
                />
            </div>
            <div className="news_card_text">
                <span className="news_card_date">
                    <i className="fa-regular fa-calendar"></i> {info?.date}
                </span>
                <h3>{i18n.language === "az" ? info?.name : info?.name_en}</h3>
                <button>
                    {i18n.language === "az" ? 'Ətraflı' : "Read more"}  <i className="fa-solid fa-arrow-right-long"></i>
                </button>
            </div>
        </Link>
    );
};

export default CardNews;
