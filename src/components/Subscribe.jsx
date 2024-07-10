import React, { useState, startTransition } from 'react';
import "./css/Subscribe.css";
import { writeData } from "../api/dbservice";
import Success from "./Modal/Success";
import { useTranslation } from 'react-i18next';

const Subscribe = () => {
    const { t } = useTranslation(["subscribe"]);
    const [email, setEmail] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const handleChange = (e) => {
        setEmail(e.target.value);
    };

    const handleWriteSubscribeData = async (e) => {
        e.preventDefault();
        
        setIsSubmitting(true);

        const path = "/subscribes";
        const data = { email };

        try {
            await writeData(path, data);
            startTransition(() => {
                setShowModal(true); // Modal göster
                setEmail(""); // Formu temizle
            });
        } catch (error) {
            console.error("Abunə məlumatını yazarkən səhv baş verdi: ", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <section id='subscribe_sec'>
            <div className="container">
                <div id="subscribe">
                    <div id="subscribe-text">
                        <p>{t('subscribe_text')}</p>
                        <form onSubmit={handleWriteSubscribeData}>
                            <input 
                                type="email" 
                                placeholder={t('email_placeholder')} 
                                value={email} 
                                onChange={handleChange} 
                                required 
                            />
                            <button type="submit" disabled={isSubmitting}>
                                {isSubmitting ? t('subscribing') : t('subscribe_button')}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <Success show={showModal} closeModal={closeModal} />
        </section>
    );
}

export default Subscribe;
