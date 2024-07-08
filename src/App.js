import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Program from "./pages/Program";
import { useEffect } from "react";
import CountryDetail from "./pages/CountryDetail";
import UniversityDetail from "./pages/UniversityDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Countries from "./pages/Countries";
function App() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    // document.querySelector("header nav").scrollTo(0, 0);
  }, [location]);
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          {/* <Switch> */}
            <Route exact path="/nf_new_web" element={<Home />} />
            <Route path="/nf_new_web/about" element={<About />} />
            <Route path="/nf_new_web/contact" element={<Contact />} />
            <Route path="/nf_new_web/countries" element={<Countries />} />

            {/* <Route path="/program" element={<Program />} /> */}
            <Route path="/nf_new_web/country/:id" element={<CountryDetail />} />
            <Route
              path="/nf_new_web/country/university/:id"
              element={<UniversityDetail />}
            />
          {/* </Switch> */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
