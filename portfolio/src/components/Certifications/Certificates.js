import React from "react";
import lgm from "../../assets/lgm.png";
import sparks from "../../assets/sparks.png";
import "./Certificates.css";

const Certificates = () => {
  const certImages = [lgm, sparks];

  return (
    <div
      className="certificates-container"
      id="certificates"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="certificates-content">
        <div className="title">
          <h2>Certifications</h2>
        </div>
        <div className="certificates">
          <h3>Internship Certificates</h3>
          <div className="cer-cards">
            {certImages.map((e, id) => {
              return (
                <div
                  className="card"
                  key={id}
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <img src={e} className="certsImage" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
