import React, { useRef } from "react";
import "./css/Cover.css";
import { useTranslation } from "react-i18next";
// import SwiperCover from "/public/SwiperCover";
const Cover = () => {
  const { t } = useTranslation("cover");
  const sliderRef = useRef();
  const nextSlide = () => {
    let slides = document.querySelectorAll(".slides");
    sliderRef.current.appendChild(slides[0]);
  }
  const prevSlide = () => {
    let slides = document.querySelectorAll(".slides");
    sliderRef.current.prepend(slides[slides.length - 1]);
  }
  return (
    <section id="cover_as">
      <div id="slider_div">
        <div className="slider" ref={sliderRef}>
          <div className="slides" style={{ backgroundImage: `url( /assets/images/cover/poland.jpg)` }}>
            <div className="content">
              <h2>{t('education_in_poland')}</h2>
              <ul>
                <li><i className="fa-solid fa-check"></i> {t('easy_application')}</li>
                <li><i className="fa-solid fa-check"></i> {t('affordable_living')}</li>
                <li><i className="fa-solid fa-check"></i> {t('military_deferment')}</li>
              </ul>
            </div>
          </div>
          <div className="slides" style={{ backgroundImage: `url( /assets/images/cover/kharkov.jpeg)` }}>
            <div className="content">
              <h2>{t('education_in_ukraine')}</h2>
              <ul>
                <li><i className="fa-solid fa-check"></i> {t('online_education')}</li>
                <li><i className="fa-solid fa-check"></i> {t('recognized_diploma')}</li>
                <li><i className="fa-solid fa-check"></i> {t('military_deferment')}</li>
              </ul>
            </div>
          </div>
          <div className="slides" style={{ backgroundImage: `url( /assets/images/cover/turkiye.png)` }}>
            <div className="content">
              <h2>{t('education_in_turkey')}</h2>
              <ul>
                <li><i className="fa-solid fa-check"></i> {t('high_standards')}</li>
                <li><i className="fa-solid fa-check"></i> {t('recognized_diploma')}</li>
                <li><i className="fa-solid fa-check"></i> {t('military_deferment')}</li>
              </ul>
            </div>
          </div>
          <div className="slides" style={{ backgroundImage: `url( /assets/images/cover/poland.jpg)` }}>
            <div className="content">
              <h2>{t('education_in_poland')}</h2>
              <ul>
                <li><i className="fa-solid fa-check"></i> {t('easy_application')}</li>
                <li><i className="fa-solid fa-check"></i> {t('affordable_living')}</li>
                <li><i className="fa-solid fa-check"></i> {t('military_deferment')}</li>
              </ul>
            </div>
          </div>
          <div className="slides" style={{ backgroundImage: `url( /assets/images/cover/kharkov.jpeg)` }}>
            <div className="content">
              <h2>{t('education_in_ukraine')}</h2>
              <ul>
                <li><i className="fa-solid fa-check"></i> {t('online_education')}</li>
                <li><i className="fa-solid fa-check"></i> {t('recognized_diploma')}</li>
                <li><i className="fa-solid fa-check"></i> {t('military_deferment')}</li>
              </ul>
            </div>
          </div>
          <div className="slides" style={{ backgroundImage: `url( /assets/images/cover/turkiye.png)` }}>
            <div className="content">
              <h2>{t('education_in_turkey')}</h2>
              <ul>
                <li><i className="fa-solid fa-check"></i> {t('high_standards')}</li>
                <li><i className="fa-solid fa-check"></i> {t('recognized_diploma')}</li>
                <li><i className="fa-solid fa-check"></i> {t('military_deferment')}</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="buttons">
          <button className="prev" onClick={prevSlide}></button>
          <button className="next" onClick={nextSlide}></button>
        </div>
      </div>
    </section>
  );
};

export default Cover;
