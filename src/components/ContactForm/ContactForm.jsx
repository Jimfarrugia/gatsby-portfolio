import React from "react";

import "./ContactForm.scss";

export const ContactForm = () => (
  <div id="contact-form" className="container">
    <h3>Contact Me</h3>
    {/* Netlify Form */}
    <form name="contact" method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value="contact" />
      <div className="row">
        <div className="col s12 m6 l5">
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
        <div className="col s12 m12 l1 hide-on-med-and-down" />
        <div className="col s12 m6 l6">
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
