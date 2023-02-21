import React from "react";
import gms from "../../assets/gms.png";
import ims from "../../assets/ims.png";
import srms from "../../assets/srms.png";
import oqms from "../../assets/oqms.png";
import todo from "../../assets/todo.png";
import weather from "../../assets/weather.png";
import notes from "../../assets/notes.png";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      image: `${oqms}`,
      title: "Online Quiz System",
      desc: "Developed a Online Quiz System where the teacher can add quiz with time and date and the student can login and attempt the quiz and can also view the results.",
    },
    {
      image: `${srms}`,
      title: "Student Result Management System",
      desc: "Developed a SRMS where teacher can add student result's and the student can add his/her result after login through their roll no. and name.",
    },
    {
      image: `${gms}`,
      title: "Gym Management System",
      desc: "Gym Management System includes all the packages available at the gym where user can book the packages and pay online while the admin can add packages, view users. Here the online payment I have integrated using Instamojo.",
    },
    {
      image: `${ims}`,
      title: "Invoice Management System",
      desc: "Gym Management System includes all the packages available at the gym where user can book the packages and pay online while the admin can add packages, view users. Here the online payment I have integrated using Instamojo.",
    },
    {
      image: `${todo}`,
      title: "TODO App",
      desc: "Designed a todo app using react js",
      link: "https://husainbc070503.github.io/TODO-APP-USING-REACT/",
    },
    {
      image: `${notes}`,
      title: "Notes App",
      desc: "Designed a Notes app using react js where user can add their note and can view or delete anytime.",
      link: "https://husain-notes.netlify.app/",
    },
    {
      image: `${weather}`,
      title: "Weather App",
      desc: "Designed a weather app using react js where just writing your city name you can get the complete weather details of that particular city.",
      link: "https://husainbc070503.github.io/react-weather-app/",
    },
  ];

  return (
    <div
      className="projects-container"
      id="projects"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="projects-content">
        <div className="title">
          <h2>Projects</h2>
        </div>
        <div className="projects-cards">
          <h3>These are the projects I have made so far in Web development,</h3>
          <div className="projects">
            {projects.map((e, index) => {
              const { image, title, desc } = e;
              return (
                <div
                  className="card"
                  key={index}
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <div className="project-image">
                    <img src={image} className="image" />
                  </div>
                  <div className="description">
                    <div className="div">
                      <div className="title">{title}</div>
                      <div className="text">
                        <p className={`${index == 2 ? "black" : ""}`}>{desc}</p>
                        {e.link ? (
                          <a
                            href={e.link}
                            className="project-link"
                            target="_blank"
                          >
                            <i class="fa-sharp fa-solid fa-arrow-up-right-from-square"></i>
                          </a>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
