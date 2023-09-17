import React from "react";
import ContactImg from "../assets/contact.svg";
import "../style/Contact.css";

function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="content">
          <h1>Contact Us</h1>
          <p>Have questions or feedback? Get in touch!</p>
          <div className="contact-form">
            <form>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" />
              </div>
              <button className="submit-button">Submit</button>
            </form>
          </div>
        </div>
        <div className="content-image">
          <img src={ContactImg} alt="Contact" />
        </div>
      </div>
    </section>
  );
}

export default Contact;
