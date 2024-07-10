import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { readData } from '../api/dbservice';
import "./Countries.css";
import CardUni from '../components/CardUni';
import { useTranslation } from 'react-i18next';

const Countries = () => {
  const { t, i18n } = useTranslation(["countries"]); // i18next kancasından t fonksiyonunu alıyoruz
  const [universities, setUniversities] = useState(null);
  const [countries, setCountries] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const path = "/universities";
      try {
        const result = await readData(path);
        setUniversities(result);
      } catch (error) {
        console.error("Veri okuma hatası: ", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (universities) {
      const countriesObj = {};
      const countriesObjEn = {};
      for (let universityId in universities) {
        let university = universities[universityId];
        if (university?.country) {
          if (!countriesObj[university.country]) {
            countriesObj[university.country] = [];
          }
          countriesObj[university.country].push({
            id: universityId,
            ...university
          });
        }
        if (university?.country_en) {
          if (!countriesObjEn[university.country_en]) {
            countriesObjEn[university.country_en] = [];
          }
          countriesObjEn[university.country_en].push({
            id: universityId,
            ...university
          });
        }
      }
      if (i18n.language === "az") {

        setCountries(countriesObj);
      } else if (i18n.language === "en") {
        setCountries(countriesObjEn)
      }
    }
  }, [universities, i18n.language]);

  return (
    <>
      <section id="first_section_">
        <div className="container">
          <div id="first_section_text">
            <div id="contries_div">
              <Link to="/" className="links_for">
                <span>{t('home')}</span>
              </Link>
              <p>/</p>
              <p>{t('countries')}</p>
            </div>
          </div>
        </div>
      </section>
      <section id='countries_section'>
        <div className="container">
          {
            Object.keys(countries).map((country, index) => (
              <div key={index}>
                <h2>{country}</h2>
                <div id='univerities_cards'>
                  {countries[country].map((university, uniIndex) => (
                    <CardUni lang={i18n.language} key={uniIndex} university={university} />
                  ))}
                </div>
              </div>
            ))
          }
        </div>
      </section>
    </>
  );
}

export default Countries;
