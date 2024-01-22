import React from "react";
import "./Skill.css";

const Skill = () => {
  return (
    <div className="Skills" id="skills">
      <div className="titles">
        <h2>Skills</h2>
        <p>My technical skills level</p>
      </div>
      <div className="both__skills">

      { /* ================ frontend Skills =========== */ }
        <div className="frontend__Skills">
          <h3 className="center">Frontend</h3>
          <div className="skills_details">
            <div className="skills__box">
              <div className="skill__name">
                <i className="bx bx-badge-check" style={{color:"black"}}></i>
                <h4>HTML</h4>
              </div>
              <p>Intermadiate</p>
            </div>
            <div className="skills__box">
              <div className="skill__name">
                <i className="bx bx-badge-check"></i>
                <h4>Bootstrap</h4>
              </div>
              <p>Intermadiate</p>
            </div>
            <div className="skills__box">
              <div className="skill__name">
                <i className="bx bx-badge-check"></i>
                <h4>Javascript</h4>
              </div>
              <p>Intermadiat</p>
            </div>
            <div className="skills__box">
              <div className="skill__name">
                <i className="bx bx-badge-check"></i>
                <h4>CSS</h4>
              </div>
              <p>Intermadiate</p>
            </div>
            <div className="skills__box">
              <div className="skill__name">
                <i className="bx bx-badge-check"></i>
                <h4>React</h4>
              </div>
              <p>Intermadiate</p>
            </div>
            <div className="skills__box">
              <div className="skill__name">
                <i className="bx bx-badge-check"></i>
                <h4>MUI</h4>
              </div>
              <p>Intermadiate</p>
            </div>
          </div>
        </div>

        { /* ================ Backend Skills =========== */ }
        {/* <div className="frontend__Skills">
          <h3 className="center">Backend</h3>
          <div className="skills_details">
            <div className="skills__box">
              <div className="skill__name">
                <i className="bx bx-badge-check"></i>
                <h4>HTML</h4>
              </div>
              <p>Intermadiate</p>
            </div>
            <div className="skills__box">
              <div className="skill__name">
                <i className="bx bx-badge-check"></i>
                <h4>Bootstrap</h4>
              </div>
              <p>Intermadiate</p>
            </div>
            <div className="skills__box">
              <div className="skill__name">
                <i className="bx bx-badge-check"></i>
                <h4>Javascript</h4>
              </div>
              <p>Intermadiat</p>
            </div>
            <div className="skills__box">
              <div className="skill__name">
                <i className="bx bx-badge-check"></i>
                <h4>CSS</h4>
              </div>
              <p>Intermadiate</p>
            </div>
            <div className="skills__box">
              <div className="skill__name">
                <i className="bx bx-badge-check"></i>
                <h4>React</h4>
              </div>
              <p>Intermadiate</p>
            </div>
            <div className="skills__box">
              <div className="skill__name">
                <i className="bx bx-badge-check"></i>
                <h4>MUI</h4>
              </div>
              <p>Intermadiate</p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Skill;
