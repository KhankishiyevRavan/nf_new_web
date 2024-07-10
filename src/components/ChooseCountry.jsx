

import "./css/ChooseCountry.css"; // Import CSS styles
import React, { useEffect, useState } from "react"; // React imports
import { readData } from "../api/dbservice"; // Import API service function
import CardUni from "./CardUni"; // Import CardUni component for displaying university cards
import i18next from "i18next"; // Import i18next for internationalization support
import { useTranslation } from "react-i18next"; // Import useTranslation hook for accessing translation functions

const ChooseCountry = () => {
  const [universities, setUniversities] = useState(null); // State to store fetched university data
  const [showUniversities, setShowUniversities] = useState([]); // State to store universities to display
  const [showCountry, setShowCountry] = useState("Ukrayna"); // State to store currently selected country (default "Ukrayna")
  const [countries, setCountries] = useState([]); // State to store list of available countries
  const { i18n } = useTranslation(); // Access i18n object from useTranslation hook

  // useEffect to fetch initial data and set default showCountry based on language
  useEffect(() => {
    const fetchData = async () => {
      const path = "/universities"; // API endpoint path
      try {
        const result = await readData(path); // Fetch data from API
        setUniversities(result); // Set universities state with fetched data

        // Set default showCountry based on current language
        if (i18next?.language === "en") {
          setShowCountry("Ukraine");
        } else if (i18next?.language === "az") {
          setShowCountry("Ukrayna");
        }
      } catch (error) {
        console.error("Error reading data: ", error); // Log error if data fetching fails
      }
    };

    fetchData(); // Call fetchData function on component mount or language change
  }, [i18n.language]); // Dependency array to run effect when language changes

  // useEffect to filter universities based on language and selected country
  useEffect(() => {
    if (universities) {
      const newCountries = []; // Array to store unique countries
      const newShowUniversities = []; // Array to store universities to display

      // Loop through universities data
      for (let universityId in universities) {
        let university = universities[universityId];

        // Check language and add unique countries to newCountries array
        if (i18next?.language === "az") {
          if (university?.country && !newCountries.includes(university.country)) {
            newCountries.push(university.country);
          }
        } else if (i18next?.language === "en") {
          if (university?.country_en && !newCountries.includes(university.country_en)) {
            newCountries.push(university.country_en);
          }
        }

        // Filter universities based on selected showCountry and add to newShowUniversities array
        if (university?.country === showCountry) {
          university["id"] = universityId; // Add university ID to object
          newShowUniversities.push(university); // Push university object to newShowUniversities array
        }
      }

      // Update countries and showUniversities state with new data
      setCountries(newCountries);
      setShowUniversities(newShowUniversities);
    }
  }, [universities, showCountry]); // Dependency array to run effect when universities or showCountry changes

  // useEffect to update showUniversities when showCountry changes
  useEffect(() => {
    if (universities) {
      const newShowUniversities = []; // Array to store universities to display

      // Loop through universities data
      for (let universityId in universities) {
        let university = universities[universityId];

        // Filter universities based on selected showCountry and language
        if (i18next?.language === "az" && university.country === showCountry) {
          university["id"] = universityId; // Add university ID to object
          newShowUniversities.push(university); // Push university object to newShowUniversities array
        } else if (i18next?.language === "en" && university.country_en === showCountry) {
          university["id"] = universityId; // Add university ID to object
          newShowUniversities.push(university); // Push university object to newShowUniversities array
        }
      }

      // Update showUniversities state with new data
      setShowUniversities(newShowUniversities);
    }
  }, [showCountry, universities]); // Dependency array to run effect when showCountry or universities change

  // Render component JSX
  return (
    <section id="chooseCountry">
      <div className="container">
        <ul>
          {/* Render list of countries */}
          {countries.map((country, index) => (
            <li
              key={index}
              className={showCountry === country ? "active" : ""}
              onClick={() => setShowCountry(country)} // Set selected country on click
              style={{ cursor: "pointer" }}
            >
              {country}
            </li>
          ))}
        </ul>
        <div id="univerities_cards">
          {/* Render university cards */}
          {showUniversities.map((university, index) => (
            <CardUni lang={i18n?.language} key={index} university={university} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChooseCountry; // Export ChooseCountry component
