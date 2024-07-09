import "./css/ChooseCountry.css";
import React, { useEffect, useState } from "react";
import { readData } from "../api/dbservice";
import CardUni from "./CardUni";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
const ChooseCountry = () => {
  const [universities, setUniversities] = useState(null);
  const [showUniversities, setShowUniversities] = useState([]);
  const [showCountry, setShowCountry] = useState("Ukrayna");
  const [countries, setCountries] = useState([]);
  const { i18n } = useTranslation()
  // console.log(i18next.language);
  useEffect(() => {
    const fetchData = async () => {
      const path = "/universities";
      try {
        const result = await readData(path);
        setUniversities(result);
        if (i18next?.language === "en") {
          setShowCountry("Ukraine")
        } else if (i18next?.language === "az") {
          setShowCountry("Ukrayna")
        }
      } catch (error) {
        console.error("Error reading data: ", error);
      }
    };
    fetchData();
  }, [i18n.language]);
  useEffect(() => {
    console.log(i18next.language);

    if (universities) {
      const newCountries = [];
      const newShowUniversities = [];

      for (let universityId in universities) {
        let university = universities[universityId];
        if (i18next?.language === "az") {
          if (university?.country && !newCountries.includes(university.country)) {
            newCountries.push(university.country);
          }
        } else if (i18next?.language === "en") {
          if (university?.country_en && !newCountries.includes(university.country_en)) {
            newCountries.push(university.country_en);
          }
        }
        if (university?.country === showCountry) {
          university["id"] = universityId;
          newShowUniversities.push(university);
        }
      }

      setCountries(newCountries);
      setShowUniversities(newShowUniversities);
    }

  }, [universities, showCountry, countries]);

  // Update showUniversities whenever showCountry changes
  useEffect(() => {
    if (universities) {
      const newShowUniversities = [];
      for (let universityId in universities) {
        let university = universities[universityId];
        if (i18next?.language === "az" && university.country === showCountry) {
          university["id"] = universityId;
          newShowUniversities.push(university);
        } else if (i18next?.language === "en" && university.country_en === showCountry) {
          university["id"] = universityId;
          newShowUniversities.push(university);
        }
      }
      setShowUniversities(newShowUniversities);
    }
    console.log(countries);
  }, [showCountry, universities, countries]);
  return (
    <section id="chooseCountry">
      <div className="container">
        <ul>
          {countries.map((country, index) => (
            <li
              key={index}
              className={showCountry === country ? "active" : ""}
              onClick={() => setShowCountry(country)}
              style={{ cursor: "pointer" }}
            >
              {country}
            </li>
          ))}
        </ul>
        <div id="univerities_cards">
          {
            showUniversities.map((university, index) => <CardUni lang={i18next?.language} key={index} university={university} />)
          }

        </div>
      </div>
    </section>
  );
};

export default ChooseCountry;
