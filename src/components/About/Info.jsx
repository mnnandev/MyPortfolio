import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <div className="bx bx-award about__icon "></div>
        <h3 className="about__title"> experience</h3>
        <div className="about__subtitle"> 3 years working</div>
      </div>

      <div className="about__box">
        <i className="bx bx-briefcase-alt about__icon"></i>
        <h3 className="about__title about__icon"> Completed</h3>
        <div className="about__subtitle">40+ projects</div>
      </div>

      <div className="about__box">
        <i className="bx bx-support about__icon"></i>
        <h3 className="about__title">support</h3>
        <div className="about__subtitle">Online 24/7</div>
      </div>
    </div>
  );
};

export default Info;
