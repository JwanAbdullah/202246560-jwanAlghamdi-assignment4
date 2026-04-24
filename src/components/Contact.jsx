import React, { useState } from "react";

function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sent");
    e.target.reset();

    setTimeout(() => setStatus(""), 3000);
  };

  return (
    <section id="contact" className="section">
      <div className="container contact">
        <h2 className="section-title">Contact Me</h2>

        <form className="contact__form" onSubmit={handleSubmit}>
          <input
            className="contact__input"
            type="text"
            placeholder="Your Name"
            required
          />
          <input
            className="contact__input"
            type="email"
            placeholder="Your Email"
            required
          />
          <textarea
            className="contact__textarea"
            placeholder="Your Message"
            required
          />

          <button className="contact__button" type="submit">
            Send Message
          </button>

          {status === "sent" && (
            <div className="contact__success">
              Message sent! I will get back to you soon.
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;