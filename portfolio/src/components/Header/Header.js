import React, { useState } from "react";
import husain from "../../assets/husain.jpg";
import "./Header.css";
import { TypeAnimation } from "react-type-animation";

const Header = () => {
  return (
    <>
      <div className="container-header">
        <div className="header-content">
          <div className="card">
            <div
              className="left"
              data-aos="flip-right"
              data-aos-duration="2000"
            >
              <img src={husain} className="profile" alt="" />
            </div>
            <div
              className="right"
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              <span>Hii I'm,</span>
              <h1 className="name">
                Husain <span>Champawala</span>
              </h1>
              <TypeAnimation
                sequence={[
                  "A Front End Developer",
                  1000,
                  "An Enthusiastic Learner",
                  1000,
                  "A Competitive Programmer",
                  1000,
                ]}
                wrapper="p"
                cursor={true}
                repeat={Infinity}
                style={{
                  fontSize: "1.5rem",
                  color: "#F6F6F6",
                  marginTop: "20px",
                }}
              />
              <div className="desc">
                <p>
                  Keen to learn new things, gain new experience and gain new
                  insights. Enhancing my skills in Web3, Blockchain etc.
                  Exploring ideas and implementing it in projects.
                </p>
              </div>
              <div className="social-icons">
                <a href="https://github.com/husainbc070503" target="_blank">
                  <i class="fa-brands fa-github"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/husain-b-champawala-2522a2205/"
                  target="_blank"
                >
                  <i class="fa-brands fa-linkedin"></i>
                </a>
                <a href="https://instagram.com">
                  <i class="fa-brands fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
