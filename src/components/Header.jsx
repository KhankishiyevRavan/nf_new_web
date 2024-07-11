import React, { useEffect, useState, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuShow, setMenuShow] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [selectedLang, setSelectedLang] = useState('az'); // Default selected language
  const { t, i18n } = useTranslation(["header"]); 

  const changeLanguage = useCallback((lng) => {
    i18n.changeLanguage(lng);
  }, [i18n]);

  const handleToggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const handleSelectLang = (lang) => {
    setSelectedLang(lang);
    setShowOptions(false); // Close options after selection
    changeLanguage(lang); // Call parent function to update language
  };

  useEffect(() => {
    document.body.style.overflow = menuShow ? "hidden" : "auto";
    const handleScroll = () => {
      const isScrolled = window.scrollY > 150;
      setScrolled(isScrolled);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuShow]);

  useEffect(() => {
    // Fetch initial language selection or set default
    const currentLang = localStorage.getItem('currentLang') || 'az';
    setSelectedLang(currentLang);
    changeLanguage(currentLang);
  }, [changeLanguage]);

  // Save selected language to Local Storage
  useEffect(() => {
    localStorage.setItem('currentLang', selectedLang);
  }, [selectedLang]);

  const handleNavLinkClick = () => {
    setMenuShow(false);
    document.body.style.overflow = "auto";
  };

  return (
    <header className={`main-header ${scrolled ? "scrolled" : ""}`}>
      <div className="container">
        <Link to="/" id="h-logo">
          <img src="/assets/images/nf_logo.png" alt="" />
        </Link>
        <div style={{ display: "flex", gap: "20px" }}>
          <nav className={`menu ${menuShow ? "menuShow" : ""}`}>
            <ul>
              <li>
                <NavLink exact="true" to="/" activeclassname="active" onClick={handleNavLinkClick}>
                  {t('home')}
                </NavLink>
              </li>
              <li>
                <NavLink exact="true" to="/countries" activeclassname="active" onClick={handleNavLinkClick}>
                  {t('universities')}
                </NavLink>
              </li>
              <li>
                <NavLink exact="true" to="/news" activeclassname="active" onClick={handleNavLinkClick}>
                  {t('news')}
                </NavLink>
              </li>
              <li>
                <NavLink exact="true" to="/about" activeclassname="active" onClick={handleNavLinkClick}>
                  {t('about')}
                </NavLink>
              </li>
              <li>
                <NavLink exact="true" to="/contact" activeclassname="active" onClick={handleNavLinkClick}>
                  {t('contact')}
                </NavLink>
              </li>
            </ul>
          </nav>
          <div style={{ display: "flex", gap: "20px" }}>
            <div className={`switch ${showOptions ? 'show-options anim-options show-shadow' : ''}`}>
              <div className="current" onClick={handleToggleOptions}>
                <span>{selectedLang}</span>
                <div className="arrow">
                  <i className="fa-solid fa-chevron-down"></i>
                </div>
              </div>
              <div className={`options ${showOptions ? 'show-options anim-options show-shadow' : ''}`}>
                <ul className="options-list">
                  <li className={selectedLang === 'az' ? 'selected' : ''} onClick={() => handleSelectLang('az')} data-lang="az">Azərbaycan</li>
                  <li className={selectedLang === 'en' ? 'selected' : ''} onClick={() => handleSelectLang('en')} data-lang="en">English</li>
                </ul>
                <div id="trans-circle"></div>
              </div>
            </div>

            <div
              id="menu"
              onClick={() => {
                setMenuShow(!menuShow);
              }}
            >
              <img src="/assets/images/menu.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
