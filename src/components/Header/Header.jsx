import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [toggle ,setToggle] = useState(false);
  return (
    <header className="header">
      <nav className="nav container">
        <a href="" className="nav__logo">Mnnan<span>Mazhar</span>Bhutta</a>

        <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#Home" className="nav__link active-link">
                <i className="uil uil-estate nav__icon"></i> Home
              </a>
            </li>

            <li className="nav__item">
              <a href="#About" className="nav__link">
                <i className="uil uil-user nav__icon"></i> About
              </a>
            </li>


            <li className="nav__item">
              <a href="#skills" className="nav__link">
                <i className="uil uil-file-alt nav__icon"></i> skills
              </a>
            </li>


            <li className="nav__item">
              <a href="#services" className="nav__link">
                <i className="uil uil-briefcase-alt nav__icon"></i>services
              </a>
            </li>

            <li className="nav__item">
              <a href="#portfolio" className="nav__link">
                <i className="uil uil-scenery nav__icon"></i>Portfolio
              </a>
            </li>

            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <i className="uil uil-message nav__icon"></i>Contact
              </a>
            </li>
            
          </ul>

          <i className="uil uil-times nav__close" onClick={()=> setToggle(false)}></i>
        </div>
        <div className="nav__toggle" >
          <i className="uil uil-apps" onClick={()=> setToggle(true)}></i>

        </div>

      </nav>
    </header>
  );
};

export default Header;
