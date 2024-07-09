import React from "react";
import { useTranslation } from "react-i18next";
import "./css/EducationSteps.css";

const EducationSteps = () => {
  const { t } = useTranslation(["educationSteps"]);

  return (
    <section id="education_steps_sec">
      <div className="container">
        <div id="education_steps_text">
          <h2>
            {t("education_steps_title")}
            <br />
            <span>{t("education_steps_subtitle")}</span>
          </h2>
        </div>
        <div id="education_steps">
          <div className="education_step">
            <span className="education_step_number">1</span>
            <div className="education_step_content">
              <h4>{t("step1_title")}</h4>
              <p>{t("step1_description")}</p>
            </div>
          </div>
          <div className="education_step">
            <span className="education_step_number blue_color">2</span>
            <div className="education_step_content">
              <h4>{t("step2_title")}</h4>
              <p>{t("step2_description")}</p>
            </div>
          </div>
          <div className="education_step">
            <span className="education_step_number green_color">3</span>
            <div className="education_step_content">
              <h4>{t("step3_title")}</h4>
              <p>{t("step3_description")}</p>
            </div>
          </div>
          <div className="education_step">
            <span className="education_step_number yellow_color">4</span>
            <div className="education_step_content">
              <h4>{t("step4_title")}</h4>
              <p>{t("step4_description")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSteps;
