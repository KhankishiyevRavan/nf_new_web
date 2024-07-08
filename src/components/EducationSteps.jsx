import React from "react";
import "./css/EducationSteps.css";
const EducationSteps = () => {
  return (
    <section id="education_steps_sec">
      <div className="container">
        <div id="education_steps_text">
          <h2>
            Xaricdə Təhsil Məsləhətləri &
            <br />
            <span>Peşəkar komandamızla tələbə ol.</span>
          </h2>
        </div>
        <div id="education_steps">
          <div className="education_step">
            <span className="education_step_number">1</span>
            <div className="education_step_content">
              <h4>Limitsiz konsultasiya</h4>
              <p>İstədiyiniz sayda universitetlərdən birdən çox ixtisas ​​təklifləri təqdim olunur</p>
            </div>
          </div>
          <div className="education_step">
            <span className="education_step_number blue_color">2</span>
            <div className="education_step_content">
              <h4>Təhsil proqramı</h4>
              <p>Karyera hədəflərinizə uyğun təhsil proqramı və universiteti müəyyənləşdirin.</p>
            </div>
          </div>
          <div className="education_step">
            <span className="education_step_number green_color">3</span>
            <div className="education_step_content">
              <h4>Diplom tanınması</h4>
              <p>Bizim əməkdaşlıq etdiyimiz universitetlərdə bütün məzunların diplomu tanınır.</p>
            </div>
          </div>
          <div className="education_step">
            <span className="education_step_number yellow_color">4</span>
            <div className="education_step_content">
              <h4>Yataqxana dəstəyi</h4>
              <p>Təhsil aldığınız müddət ərzində rahat və təhlükəsiz yataqxana tapmağınıza kömək edirik.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSteps;
