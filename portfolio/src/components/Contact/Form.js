import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await fetch("https://httpbin.org/post", {
        method: "post",
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      const data = await resp.json();
      if (resp.status == 200) {
        setEmail("");
        setName("");
        setMessage("");
        setSuccessMessage("Thank you for Contacting! I'll reply soon.");
      } else setSuccessMessage("Something went wrong! Please try again later.");
      console.log(data.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="msg">
          <p>{successMessage}</p>
        </div>
        <div className="input-group">
          <input
            type="text"
            className="input"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
          <label htmlFor="name">Name</label>
        </div>
        <div className="input-group">
          <input
            type="email"
            className="input"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
          <label htmlFor="email">Email</label>
        </div>
        <div className="input-group">
          <textarea
            className="input textarea"
            rows="5"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            required
          ></textarea>
          <label htmlFor="message">Message</label>
        </div>
        <div className="button">
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
