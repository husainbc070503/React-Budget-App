import React from "react";
import './About.css'

const About = () => {
  return (
    <div className="about-container" id="about" data-aos="fade-up" data-aos-duration="1500">
      <div className="about-card">
        <div className="title">
          <h2>About Me</h2>
        </div>
        <div className="description">
          <h3>Currently,</h3>
          <div className="about-desc">
            <p>
              🎓 I'm in 3rd year pursuing B.E. in Computer Science from
              University of Mumbai. I am always excited to learn new things,
              meet new people ,get connected with like minded people , share my
              experience, and learn from their experiences.
            </p>
            <p>
              🧑‍💻 I did one month Internship in Web Development at{" "}
              <a href="https://letsgrowmore.in/" target="_blank">
                {" "}
                Let's Grow More{" "}
              </a>{" "}
              and{" "}
              <a
                href="https://internship.thesparksfoundation.info/"
                target="_blank"
              >
                The Sparks Foundation
              </a>
              . It was great experience working with these teams and will be
              doing few more internships in future.
            </p>
            <p>
              🌟 I'm passionate about learning new technologies and working with
              like minded people.
            </p>
            <p>
              🔗 I'm an open-source enthusiast , and contribute to project and
              enhance my skills. I'm also learning MERN Stack and exploring
              Blockchain Technology.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
