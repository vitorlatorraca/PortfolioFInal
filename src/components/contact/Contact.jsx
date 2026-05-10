import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (submitStatus) setSubmitStatus(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus(null);

    try {
      const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
      const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
      const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'vitorlatorraca5@gmail.com',
        },
        publicKey
      );

      setSubmitStatus('success');
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="contact section" id="contact">
      <div className="contact__container container">
        <header className="contact__header">
          <span className="section__number">04 / contact</span>
          <h2 className="section__title">let's work together.</h2>
        </header>

        <div className="contact__body">
          <div className="contact__info-section">
            <p className="contact__info-lead">
              I'm open to new projects, freelance work and full-time roles.
              Drop a message — I'll get back within 48h.
            </p>

            <div className="contact__info-block">
              <h3 className="contact__info-title">{'// reach out'}</h3>
              <ul className="contact__list">
                <li>
                  <a
                    href="mailto:vitorlatorraca5@gmail.com"
                    className="contact__list-item"
                  >
                    <span className="contact__list-label">email</span>
                    <span className="contact__list-value">vitorlatorraca5@gmail.com ↗</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/16477136932"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact__list-item"
                  >
                    <span className="contact__list-label">phone</span>
                    <span className="contact__list-value">+1 (647) 713-6932 ↗</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="contact__info-block">
              <h3 className="contact__info-title">{'// social'}</h3>
              <ul className="contact__list">
                <li>
                  <a
                    href="https://www.linkedin.com/in/vitor-latorraca-47430620a"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact__list-item"
                  >
                    <span className="contact__list-label">linkedin</span>
                    <span className="contact__list-value">vitor-latorraca ↗</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/vitorlatorraca"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact__list-item"
                  >
                    <span className="contact__list-label">github</span>
                    <span className="contact__list-value">vitorlatorraca ↗</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/vitorlatorraca"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact__list-item"
                  >
                    <span className="contact__list-label">instagram</span>
                    <span className="contact__list-value">vitorlatorraca ↗</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="contact__form-section">
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="contact__form-group">
                <label htmlFor="name" className="contact__form-label">
                  {'// name'}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="contact__form-input"
                  placeholder="your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact__form-group">
                <label htmlFor="email" className="contact__form-label">
                  {'// email'}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="contact__form-input"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact__form-group">
                <label htmlFor="message" className="contact__form-label">
                  {'// message'}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  className="contact__form-input contact__form-textarea"
                  placeholder="tell me about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="button contact__submit"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>sending...</>
                ) : (
                  <>send message <span aria-hidden="true">→</span></>
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="contact__status contact__status--success">
                  {'// message sent. talk to you soon.'}
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="contact__status contact__status--error">
                  {'// failed to send. email me directly at vitorlatorraca5@gmail.com'}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
