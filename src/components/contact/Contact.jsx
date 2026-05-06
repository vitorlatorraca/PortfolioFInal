import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear status when user starts typing
    if (submitStatus) {
      setSubmitStatus(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus(null);

    try {
      // EmailJS configuration
      // You need to replace these with your own EmailJS credentials
      // Get them from https://www.emailjs.com/
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
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
      
      // Clear error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="contact section" id="contact">
      <div className="section-divider section-divider--top" aria-hidden="true">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,40 C240,0 480,80 720,40 C960,0 1200,80 1440,40 L1440,0 L0,0 Z" fill="rgba(199, 224, 255, 0.4)"/>
          <path d="M0,50 C240,10 480,90 720,50 C960,10 1200,90 1440,50 L1440,0 L0,0 Z" fill="rgba(224, 215, 255, 0.35)"/>
        </svg>
      </div>
      <div className="contact__header">
        <svg className="section__doodle" width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.5-7 10-7 10z" fill="#FF6B6B"/>
        </svg>
        <h2 className="section__title">Get in Touch</h2>
        <span className="section__subtitle">
          Let's work together and bring your ideas to life
        </span>
      </div>

      <div className="contact__container container grid">
        <div className="contact__info-section">
          <h3 className="contact__info-title">Let's Connect!</h3>
          <p className="contact__info-description">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>

          <div className="contact__cards">
            <a
              href="mailto:vitorlatorraca5@gmail.com"
              className="contact__card contact__card--email"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="contact__card-icon-wrapper">
                <i className="uil uil-envelope-alt contact__card-icon"></i>
              </div>
              <div className="contact__card-content">
                <h3 className="contact__card-title">Email</h3>
                <span className="contact__card-data">vitorlatorraca5@gmail.com</span>
              </div>
              <i className="uil uil-arrow-right contact__card-arrow"></i>
            </a>

            <a
              href="https://wa.me/16477136932"
              className="contact__card contact__card--whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="contact__card-icon-wrapper">
                <i className="uil uil-whatsapp contact__card-icon"></i>
              </div>
              <div className="contact__card-content">
                <h3 className="contact__card-title">WhatsApp</h3>
                <span className="contact__card-data">+1 (647) 713-6932</span>
              </div>
              <i className="uil uil-arrow-right contact__card-arrow"></i>
            </a>

            <a
              href="https://www.linkedin.com/in/vitor-latorraca-47430620a"
              className="contact__card contact__card--linkedin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="contact__card-icon-wrapper">
                <i className="uil uil-linkedin-alt contact__card-icon"></i>
              </div>
              <div className="contact__card-content">
                <h3 className="contact__card-title">LinkedIn</h3>
                <span className="contact__card-data">Connect with me</span>
              </div>
              <i className="uil uil-arrow-right contact__card-arrow"></i>
            </a>
          </div>
        </div>

        <div className="contact__form-section">
          <h3 className="contact__form-title">Send me a message</h3>
          <p className="contact__form-description">
            Fill out the form below and I'll get back to you as soon as possible.
          </p>

          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__form-group">
              <label htmlFor="name" className="contact__form-label">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="contact__form-input"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact__form-group">
              <label htmlFor="email" className="contact__form-label">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="contact__form-input"
                placeholder="john.doe@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact__form-group">
              <label htmlFor="message" className="contact__form-label">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                className="contact__form-input contact__form-textarea"
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="button button--flex contact__submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <i className="uil uil-spinner-alt contact__spinner"></i>
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <svg
                    className="button__icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z"
                      fill="var(--container-color)"
                    ></path>
                    <path
                      d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z"
                      fill="var(--container-color)"
                    ></path>
                  </svg>
                </>
              )}
            </button>

            {submitStatus === 'success' && (
              <div className="contact__status contact__status--success">
                <i className="uil uil-check-circle"></i>
                Message sent successfully! I'll get back to you soon.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="contact__status contact__status--error">
                <i className="uil uil-exclamation-triangle"></i>
                Failed to send message. Please try again or contact me directly at vitorlatorraca5@gmail.com
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
