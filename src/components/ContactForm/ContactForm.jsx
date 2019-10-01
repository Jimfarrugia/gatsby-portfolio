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
          <div className="input-field">
            <label htmlFor="name">Your Name:</label> {/* eslint-disable-line*/}
            <input id="name" type="text" name="name" required />
          </div>
          <div className="input-field">
            <label htmlFor="email">Your Email:</label> {/* eslint-disable-line*/}
            <input id="email" type="email" name="email" required />
          </div>
          <div className="input-field">
            <label htmlFor="subject">Subject:</label> {/* eslint-disable-line*/}
            <input id="subject" type="text" name="subject" required />
          </div>
        </div>
        <div className="col s12 m12 l1 hide-on-med-and-down" />
        <div className="col s12 m6 l6">
          <div className="input-field">
            <label htmlFor="message">Message:</label> {/* eslint-disable-line*/}
            <textarea id="message" name="message" className="materialize-textarea" />
          </div>
          <div className="input-field form-actions">
            <button type="submit" className="btn waves-effect waves-light">Send</button>
          </div>
        </div>
      </div>
    </form>
  </div>
);

export default ContactForm;
