import React from "react";
import "./Contact.css";
import Form from "./Form";

const Contact = () => {
  return (
    <div
      className="contact-container"
      id="contact"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="contact-content">
        <div className="title">
          <h2>Contact Me</h2>
        </div>
        <div
          className="contact-form"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Contact;
