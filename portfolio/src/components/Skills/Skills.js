import React from "react";
import cplusplus from "../../assets/c++.png";
import html5 from "../../assets/html5.png";
import css3 from "../../assets/css3.png";
import js from "../../assets/js.png";
import react from "../../assets/react.png";
import boot from "../../assets/bootstrap.png";
import "./Skills.css";

const Skills = () => {
  const skillsData = [
    {
      title: "C++",
      src: `${cplusplus}`,
      titleClassName: "cplus",
    },
    {
      title: "HTML5",
      src: `${html5}`,
      titleClassName: "html",
    },
    {
      title: "CSS3",
      src: `${css3}`,
      titleClassName: "css",
    },
    {
      title: "JavaScript",
      src: `${js}`,
      titleClassName: "js",
    },
    {
      title: "React JS",
      src: `${react}`,
      titleClassName: "react",
    },
    {
      title: "Bootstrap",
      src: `${boot}`,
      titleClassName: "boot",
    },
  ];

  return (
    <div
      className="skills-container"
      id="skills"
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      <div className="skills-content">
        <div className="title">
          <h2>Skills</h2>
        </div>
        <div className="skills-icons">
          <h3>Technologies I know, </h3>
          <div className="icons">
            {skillsData.map((e, index) => {
              const { title, src, titleClassName } = e;
              return (
                <div
                  className="icon"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  key={index}
                >
                  <h2 className={`icon-title ${titleClassName}`}>{title}</h2>
                  <img src={src} className="icon-image" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
