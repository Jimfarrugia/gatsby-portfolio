import React from "react";

import "./ContactForm.scss";

export const ContactForm = () => (
  <div className="container">
    <h3>Contact Me</h3>
    <form name="contactForm" method="POST" action="/" netlify>
      <div className="row">
        <div className="col s6">
          <p>
            <label htmlFor="name">
              Your Name: 
              <input id="name" type="text" name="name" />
            </label>
          </p>
          <p>
            <label htmlFor="email">
              Your Email: 
              <input id="email" type="email" name="email" />
            </label>
          </p>
          <p>
            <label htmlFor="subject">
              Subject:
              <input id="subject" type="text" name="subject" />
            </label>
          </p>
        </div>
        <div className="col s6">
          <p>
            <label htmlFor="message">
              Message: 
              <textarea id="message" name="message" />
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </div>
      </div>
    </form>
  </div>
);

export default ContactForm;
