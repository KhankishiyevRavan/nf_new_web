import "./css/ChooseCountry.css";
import React, { useEffect, useState } from "react";
import { readData } from "../api/dbservice";
import { Link } from "react-router-dom";
import CardUni from "./CardUni";
const ChooseCountry = () => {
  const [universities, setUniversities] = useState(null);
  const [showUniversities, setShowUniversities] = useState([]);
  const [showCountry, setShowCountry] = useState("Ukrayna");
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const path = "/universities";
      try {
        const result = await readData(path);
        setUniversities(result);
      } catch (error) {
        console.error("Error reading data: ", error);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    if (universities) {
      const newCountries = [];
      const newShowUniversities = [];

      for (let universityId in universities) {
        let university = universities[universityId];
        if (university?.country && !newCountries.includes(university.country)) {
          newCountries.push(university.country);
        }
        if (university?.country === showCountry) {
          university["id"] = universityId;
          newShowUniversities.push(university);
        }
      }

      setCountries(newCountries);
      setShowUniversities(newShowUniversities);
    }

  }, [universities, showCountry]);

  // Update showUniversities whenever showCountry changes
  useEffect(() => {
    if (universities) {
      const newShowUniversities = [];
      for (let universityId in universities) {
        let university = universities[universityId];
        if (university.country === showCountry) {
          university["id"] = universityId;
          newShowUniversities.push(university);
        }
      }
      setShowUniversities(newShowUniversities);
    }
  }, [showCountry, universities]);
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
            showUniversities.map((university) => <CardUni university={university} />
              // (
              //   <Link to={`/country/university/${showUni.id}`} key={showUni.id} className="university_card">
              //     <div className="university_card_image">
              //       <img src={showUni.image_url} alt="" />
              //     </div>
              //     <div className="university_card_text">
              //       <span>{showUni?.name}</span>
              //       <h4>{showUni?.city}</h4>
              //     </div>
              //   </Link>
              // )
            )
          }

        </div>
      </div>
    </section>
  );
};

export default ChooseCountry;
