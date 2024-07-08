import React, { useState } from 'react';
import "./css/Subscribe.css";
import { writeData } from "../api/dbservice";
import Success from "./Modal/Success"
const Subscribe = () => {
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
            setShowModal(true); // Modal'ı göster
            setEmail(""); // Formu temizle
        } catch (error) {
            console.error("Error writing subscribe data: ", error);
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
                        <p>Ən son yeniliklərdə xəbardar olmaq üçün abunə ola bilərsiz.</p>
                        <form onSubmit={handleWriteSubscribeData}>
                            <input 
                                type="email" 
                                placeholder='E-poçt əlavə edin' 
                                value={email} 
                                onChange={handleChange} 
                                required 
                            />
                            <button type="submit" disabled={isSubmitting}>
                                {isSubmitting ? 'Abone olunur...' : 'Abonə ol'}
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
