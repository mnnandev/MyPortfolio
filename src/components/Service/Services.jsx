import React, { useState } from "react";
import "./Services.css";

const Services = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="services" id="services">
      <div className="heading">
        <h2>Services</h2>
        <p>what i offer</p>
      </div>
      <div className="services__details">
        <div className="inner-div">
          <div
            className="service__box"
            
          >
            <h3>web designer</h3>
            <div className="view-more" onClick={() => {
              console.log("service__box clicked");
              setToggle(true);
            }}>
              <p>view more</p>
              <i className="uil uil-arrow-right arrow-icon"></i>
            </div>

           

          </div>
           {
            toggle && (
              <div className="webdesigner_detail">
              <div className="wd__innerdetail">
                <div className="close-btn">
                  <i
                    className="uil uil-times"
                    onClick={() => {
                      console.log("Close button clicked");
                      setToggle(false);
                    }}
                  ></i>
                </div>
                <div className="box1">
                  <h2>UI / UX designer</h2>
                  <p>
                    services more than 2.5 year of experience. providing quality
                    work to the client and companies
                  </p>
                </div>
                <div className="box2">
                  <div className="box2-detail">
                    <i className="uil uil-check-circle"></i>
                    <p>i develope the userinter face</p>
                  </div>

                  <div className="box2-detail">
                    <i className="uil uil-check-circle"></i>
                    <p>web page development</p>
                  </div>

                  <div className="box2-detail">
                    <i className="uil uil-check-circle"></i>
                    <p>i create ux element interactions</p>
                  </div>

                  <div className="box2-detail">
                    <i className="uil uil-check-circle"></i>
                    <p>i develope the userinter face</p>
                  </div>

                  <div className="box2-detail">
                    <i className="uil uil-check-circle"></i>
                    <p>i position your company brand</p>
                  </div>

                  <div className="box2-detail">
                    <i className="uil uil-check-circle"></i>
                    <p>Design and mockups of products for companies</p>
                  </div>
                </div>
              </div>
            </div>
            )
           }


          <div className="service__box">
            <h3>visual designer</h3>
            <div className="view-more">
              <p>view more</p>
              <i className="uil uil-arrow-right arrow-icon"></i>
            </div>
          </div>
          <div className="service__box">
            <h3>visual designer</h3>
            <div className="view-more">
              <p>view more</p>
              <i className="uil uil-arrow-right arrow-icon"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
