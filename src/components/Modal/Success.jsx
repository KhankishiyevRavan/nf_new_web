import React, { useEffect } from 'react';
import "./Success.css"
const Modal = ({ show, closeModal }) => {
    useEffect(() => {
        console.log(show);
    }, [show])
    return (
        <div id='success_modal' className={`modal ${show ? 'show' : ''}`}>
            <div className="modal_content">
                <span className="close" onClick={closeModal}>&times;</span>
                <h1 style={{ textAlign: "center" }}>
                    <div className="checkmark-circle" >
                        <div className="background"></div>
                        <div className="checkmark draw"></div>
                    </div>
                </h1>
                <p style={{marginTop:"20px"}}>Təşəkkürler! Mesajınız tezliklə geri dönüş ediləcək.</p>
            </div>
        </div>
    );
};

export default Modal;


