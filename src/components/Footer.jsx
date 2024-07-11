import React from 'react';
import "./css/Footer.css";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation(["footer"]);

  return (
    <footer id="footer">
      <div className="container">
        <div>
          <Link to="/">
            <img src="/assets/images/nf_logo_new-removebg.png" className="img-fluid logo-footer" alt="logo" />
          </Link>
        </div>
        <div>
          <div className="useful-link">
            <h2>{t('links')}</h2>
            <div className="use-links">
              <li><Link to="/"><i className="fa-solid fa-angles-right"></i> {t('home')}</Link></li>
              <li><Link to="/countries"><i className="fa-solid fa-angles-right"></i> {t('universities')}</Link></li>
              <li><Link to="/news"><i className="fa-solid fa-angles-right"></i> {t('news')}</Link></li>
              <li><Link to="/about"><i className="fa-solid fa-angles-right"></i> {t('about')}</Link></li>
            </div>
          </div>
        </div>
        <div>
          <div className="social-links">
            <h2>{t('follow_us')}</h2>
            <div class="social-icons">
              <li><a href="https://www.facebook.com/ukrainadatehsiil.az/" target='_blank' rel="noopener noreferrer"><i class="fa-brands fa-facebook-f"></i> Facebook</a></li>
              <li><a href="https://www.instagram.com/nf_education_/" target='_blank' rel="noopener noreferrer"><i class="fa-brands fa-instagram"></i> Instagram</a></li>
              <li><a href="https://www.linkedin.com/company/nf-education/" target='_blank' rel="noopener noreferrer"><i class="fa-brands fa-linkedin-in"></i> Linkedin</a></li>
              <li><a href="https://www.youtube.com/@NFEducation" target='_blank' rel="noopener noreferrer"><i class="fa-brands fa-youtube"></i>Youtube</a></li>
            </div>
          </div>
        </div>
        <div>
          <div className="address">
            <h2>{t('address')}</h2>
            <div className="address-links">
              <li className="address1"><i className="fa-solid fa-location-dot"></i> {t('address_details')}</li>
              <li><a href="tel:+994 77 325 93 04"><i className="fa-solid fa-phone"></i> {t('phone')}</a></li>
              <li><a href="mailto:info@nf-edu.com"><i className="fa-solid fa-envelope"></i> {t('email')}</a></li>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
