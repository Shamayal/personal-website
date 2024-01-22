import React, { useState } from "react";
import validator from "validator";
import "../styles/Contact.css";
import Email from "../media/Email.png";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!name || !email || !message) {
      // Display an error message or handle it as needed
      console.error("Please fill in all required fields.");
      return;
    }

    // More advanced validation (using a library like 'validator')
    if (!validator.isEmail(email)) {
      // Display an error message or handle it as needed
      console.error("Please enter a valid email address.");
      return;
    }

    // If validation passes, submit the form data
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        // Display a success message or redirect the user
        console.log("Form submitted successfully!");
      } else {
        // Display an error message or handle it as needed
        console.error("Form submission failed.");
      }
    } catch (error) {
      // Handle fetch error
      console.error("Error during form submission:", error);
    }
  };
  return (
    <div>
      <p className="poppins-400-font">GET IN TOUCH</p>
      <h1 className="poppins-800-font">Contact Me</h1>
      <section className="email-me">
        <a href="mailto:shamayal.syed@outlook.com">
          <p className="montserrat-400-font">
            <img src={Email} alt="Email" /> :  shamayal.syed@outlook.com
          </p>
        </a>
      </section>

      <form>
        <div>
          <label htmlFor="name" className="montserrat-400-font"><strong>Name:</strong></label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="email" className="montserrat-400-font"><strong>Email:</strong></label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="message" className="montserrat-400-font"><strong>Message:</strong></label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <button type="submit" onClick={handleSubmit} className="montserrat-400-font contact-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
