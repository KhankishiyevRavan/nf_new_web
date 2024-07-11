import React from 'react';
import { useTranslation } from 'react-i18next';
import "./About.css";

const About = () => {
    const { t } = useTranslation(["about"]);

    return (
        <>
            <section id="about_us_section">
                <div className="container">
                    <div id="ds-flx-aboutus">
                        <div id="left_text_about">
                            <h2>
                                {t('about_us')}
                            </h2>
                        </div>
                        <div id="right_text_about">
                            <p>
                                {t('about_us_paragraph')}
                            </p>
                        </div>
                    </div>
                    <div id="img_under_text_aboutus">
                        <img src="https://wp.xpressbuddy.com/evisa/wp-content/uploads/2023/12/about_img3.jpg" alt="" />
                    </div>
                    <div id="numbers_in_aboutus">
                        <div className="about_innertext" style={{ textAlign: "center" }}>
                            <h1>10</h1>
                            <div className="dots_about">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <h5>{t('experience_years')}</h5>
                        </div>
                        <div className="about_innertext" style={{ textAlign: "center" }}>
                            <h1>100+</h1>
                            <div className="dots_about">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <h5>{t('universities_collaboration')}</h5>
                        </div>
                        <div className="about_innertext" style={{ textAlign: "center" }}>
                            <h1>2500+</h1>
                            <div className="dots_about">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <h5>{t('student_admissions')}</h5>
                        </div>
                    </div>
                </div>
            </section>
            <section id='about_section_options'>
                <div className="container">
                    <div className="mission">
                        <div className="mission_text">
                            <h2>
                                <span style={{ display: "block" }}>{t('mission')}</span>
                                {t('join_us')}
                            </h2>
                            <p>
                                {t('mission_paragraph')}
                            </p>
                        </div>
                        <div className="mission_image">
                            <img src="/assets/images/mission.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section id="bg-foto-section">
                <div className="container">
                    <div id="text_center">
                        <h2>{t('students')}</h2>
                    </div>
                    <div id="many_boxes">
                        <div class="box_about">
                            <div class="img_box_about">
                                <img src="https://wp.xpressbuddy.com/evisa/wp-content/uploads/2023/12/img_01-1.png" alt="" />
                            </div>
                            <div class="text_box_about">
                                <h3>
                                    <a href="#">Esther Howard</a>
                                </h3>
                                <span>Legal Advisor</span>
                            </div>
                        </div>
                        {/* İçerik buraya gelecek */}
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;
