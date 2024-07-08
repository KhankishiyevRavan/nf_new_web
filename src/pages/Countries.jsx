import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { readData } from '../api/dbservice';
import "./Countries.css";
import CardUni from '../components/CardUni';
const Countries = () => {
  const [universities, setUniversities] = useState(null);
  const [countries, setCountries] = useState({});

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
      const countriesObj = {};
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
      }
      setCountries(countriesObj);
    }
  }, [universities]);
  return (
    <>
      <section id="first_section_"
      >
        <div className="container">
          <div id="first_section_text" >
            {/* <h1>Country Detailssss</h1> */}
            <div id="contries_div">
              <Link to="/" className="links_for">
                <span>Ana səhifə</span>
              </Link>
              <p>/</p>
              <p>Ölkələr</p>
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
                    <CardUni university={university} />
                  ))}
                </div>
              </div>
            ))
          }
        </div>
      </section>
    </>
  )
}

export default Countries