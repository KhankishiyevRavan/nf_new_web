import React from "react";
import Cover from "../components/Cover";

import Partners from "../components/Partners";
// import Services from "../components/Services";
import ChooseCountry from "../components/ChooseCountry";
import EducationSteps from "../components/EducationSteps";
import News from "../components/News";
import Subscribe from "../components/Subscribe";
import ContactForm from "../components/ContactForm";
const Home = () => {
  return (
    <>
      <Cover />
      <ChooseCountry />
      <EducationSteps />  
      {/* <Partners /> */}
      <News />
      <Subscribe />
      <ContactForm />
      {/* <Services /> */}
    </>
  );
};

export default Home;
