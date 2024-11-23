import React from 'react';
import "./Success.css";
import { useTranslation } from 'react-i18next';

const Modal = ({ show, closeModal }) => {
    const { t } = useTranslation(["modal"]);

  

    return (
        <div id='success_modal' className={`modal ${show ? 'show' : ''}`}>
            <div className="modal_content">
                <span className="close" onClick={closeModal}>&times;</span>
                <h6 style={{ textAlign: "center" }}>
                    <div className="checkmark-circle">
                        <div className="background"></div>
                        <div className="checkmark draw"></div>
                    </div>
                </h6>
                <p style={{ marginTop: "20px" }}>{t('thank_you_message')}</p>
            </div>
        </div>
    );
};

export default Modal;
