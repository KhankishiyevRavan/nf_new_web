import React, { useEffect, useState } from 'react';
import "./css/ContactForm.css";
import SelectOption from './Input/SelectOption';
import { writeData } from "../api/dbservice";
import Success from './Modal/Success';
import { useTranslation } from 'react-i18next';
// import ReactPlayer from 'react-player';

const ContactForm = () => {
    const { t } = useTranslation(["contact"]);
    const [contactData, setContactData] = useState({
        fullname: "",
        email: "",
        type: "ukrayna",
        phone: "",
        message: ""
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showModal, setShowModal] = useState(false);

    // useEffect(() => {
    //     // Dil değişikliğinde validasyon mesajlarını güncelle
    //     validate();
    // }, [i18n.language]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        // Hata varsa, hata mesajını kaldır
        setErrors(prevErrors => ({ ...prevErrors, [name]: "" }));

        // Input değişikliğini state'e kaydet
        setContactData(prevState => ({ ...prevState, [name]: value }));
    };

    const validate = () => {
        let tempErrors = {};
        let isValid = true;

        if (!contactData?.fullname) {
            isValid = false;
            tempErrors["fullname"] = t("fullname_required");
        }
        if (!contactData?.email) {
            isValid = false;
            tempErrors["email"] = t("email_required");
        }
        if (!contactData?.phone) {
            isValid = false;
            tempErrors["phone"] = t("phone_required");
        }
        if (!contactData?.message) {
            isValid = false;
            tempErrors["message"] = t("message_required");
        }

        setErrors(tempErrors);
        return isValid;
    };

    const handleWriteData = async (e) => {
        e.preventDefault();

        if (!validate()) {
            return;
        }

        setIsSubmitting(true);

        const path = "/contacts"; // Veriyi yazmak istediğiniz yol
        const data = contactData; // Yazmak istediğiniz veri

        try {
            await writeData(path, data);
            setShowModal(true); 
            setContactData({
                fullname: "",
                email: "",
                type: "ukrayna",
                phone: "",
                message: ""
            });
            setErrors({});
        } catch (error) {
            console.error("Error writing data: ", error);
        } finally {
            setIsSubmitting(false); // Gönderim tamamlandığında veya hata olduğunda butonu tekrar etkin hale getir
        }
    };

    const handleOutsideClick = (e) => {
        if (!e.target.closest("#contact_form")) {
            // Form dışına tıklandığında hataları sıfırla
            setErrors({});
        }
    };

    useEffect(() => {
        // Dışarıya tıklamalarda hataları sıfırla
        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, []);

    return (
        <section id='contact_form_sec'>
            <div className="container">
                <div id="contact_form">
                    <div>
                        <p>{t("contact_form_subtitle")}</p>
                        <form onSubmit={handleWriteData}>
                            <div className={`form_group ${errors?.fullname ? 'error' : ''}`}>
                                <label htmlFor="full_name">
                                    <i className="fa-regular fa-user"></i>
                                    <input
                                        id="full_name"
                                        type="text"
                                        placeholder='Emil Gasanov'
                                        name='fullname'
                                        value={contactData?.fullname}
                                        onChange={handleChange}
                                    />
                                    {errors.fullname && <span>{errors.fullname}</span>}
                                </label>
                            </div>
                            <div className={`form_group ${errors.email ? 'error' : ''}`}>
                                <label htmlFor="email">
                                    <i className="fa-regular fa-envelope"></i>
                                    <input
                                        id="email"
                                        type="email"
                                        placeholder='emil@nf-edu.com'
                                        name='email'
                                        value={contactData?.email}
                                        onChange={handleChange}
                                    />
                                    {errors.email && <span>{errors.email}</span>}
                                </label>
                            </div>
                            <div className="form_group sel_op">
                                <i className="fa-solid fa-earth-americas"></i>
                                <SelectOption
                                    contactData={contactData}
                                    setContactData={setContactData}
                                />
                            </div>
                            <div className={`form_group ${errors.phone ? 'error' : ''}`}>
                                <label htmlFor="phone">
                                    <i className="fa-solid fa-phone"></i>
                                    <input
                                        id="phone"
                                        type="text"
                                        placeholder='+994 55 645 77 32'
                                        name='phone'
                                        value={contactData?.phone}
                                        onChange={handleChange}
                                    />
                                    {errors.phone && <span>{errors.phone}</span>}
                                </label>
                            </div>
                            <div className={`form_group textarea ${errors.message ? 'error' : ''}`}>
                                <label htmlFor="message">
                                    <i className="fa-regular fa-comments"></i>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={contactData?.message}
                                        onChange={handleChange}
                                    ></textarea>
                                    {errors.message && <span>{errors.message}</span>}
                                </label>
                            </div>
                            <button type="submit" disabled={isSubmitting}>
                                {isSubmitting ? t("sending") : t("send_message")}
                            </button>
                        </form>
                    </div>
                    <Success show={showModal} closeModal={() => setShowModal(false)} />
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1860.0770594155642!2d49.825664557410505!3d40.38206753647722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d97598f18d3%3A0xf959ace03a2d6756!2s13%20Fuad%20Ibrahimbayov%2C%20Baku!5e0!3m2!1sen!2saz!4v1717503242239!5m2!1sen!2saz"
                        style={{ border: "0" }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
// 
// <!--
//   Copyright 2023 Google LLC

//   Licensed under the Apache License, Version 2.0 (the "License");
//   you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at

//       https://www.apache.org/licenses/LICENSE-2.0

//   Unless required by applicable law or agreed to in writing, software
//   distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
//   limitations under the License.
// -->
// <!DOCTYPE html>
// <html>
//   <head>
//     <title>Locator</title>
//     <meta charset="utf-8">
//     <meta name="viewport" content="width=device-width,initial-scale=1">
//     <style>
//       html,
//       body {
//         height: 100%;
//         margin: 0;
//       }

//       gmpx-store-locator {
//         width: 100%;
//         height: 100%;

//         /* These parameters customize the appearance of Locator Plus. See the documentation at
//            https://github.com/googlemaps/extended-component-library/blob/main/src/store_locator/README.md
//            for more information. */
//         --gmpx-color-surface: #fff;
//         --gmpx-color-on-surface: #212121;
//         --gmpx-color-on-surface-variant: #757575;
//         --gmpx-color-primary: #1967d2;
//         --gmpx-color-outline: #e0e0e0;
//         --gmpx-fixed-panel-width-row-layout: 28.5em;
//         --gmpx-fixed-panel-height-column-layout: 65%;
//         --gmpx-font-family-base: "Roboto", sans-serif;
//         --gmpx-font-family-headings: "Roboto", sans-serif;
//         --gmpx-font-size-base: 0.875rem;
//         --gmpx-hours-color-open: #188038;
//         --gmpx-hours-color-closed: #d50000;
//         --gmpx-rating-color: #ffb300;
//         --gmpx-rating-color-empty: #e0e0e0;
//       }
//     </style>
//     <script>
//       const CONFIGURATION = {
//         "locations": [
//           {"title":"NF Education","address1":"Fuad İbrahimbəyov 9a","address2":"Baku, Azerbaijan","coords":{"lat":40.381904,"lng":49.8254349},"placeId":"ChIJI5LSM0p9MEARpibYmFQHc2Y"}
//         ],
//         "mapOptions": {"center":{"lat":38.0,"lng":-100.0},"fullscreenControl":true,"mapTypeControl":false,"streetViewControl":false,"zoom":4,"zoomControl":true,"maxZoom":17,"mapId":""},
//         "mapsApiKey": "YOUR_API_KEY_HERE",
//         "capabilities": {"input":false,"autocomplete":false,"directions":false,"distanceMatrix":false,"details":false,"actions":false}
//       };

//     </script>
//     <script type="module">
//       document.addEventListener('DOMContentLoaded', async () => {
//         await customElements.whenDefined('gmpx-store-locator');
//         const locator = document.querySelector('gmpx-store-locator');
//         locator.configureFromQuickBuilder(CONFIGURATION);
//       });
//     </script>
//   </head>
//   <body>
//     <!-- Please note unpkg.com is unaffiliated with Google Maps Platform. -->
//     <script type="module" src="https://unpkg.com/@googlemaps/extended-component-library@0.6"></script>

//     <!-- Uses components from the Extended Component Library; see
//          https://github.com/googlemaps/extended-component-library for more information
//          on these HTML tags and how to configure them. -->
//     <gmpx-api-loader key="YOUR_API_KEY_HERE" solution-channel="GMP_QB_locatorplus_v10_c"></gmpx-api-loader>
//     <gmpx-store-locator map-id="DEMO_MAP_ID"></gmpx-store-locator>
//   </body>
// </html>