import React, { useState } from 'react';
import { FaEnvelope, FaSms, FaLinkedin } from 'react-icons/fa'; // Import icons from React Icons
import '../css/Page.css'; // Import the CSS file for styling

const Contact = () => {
  const [contactMedium, setContactMedium] = useState('email'); // Default medium is email

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name?.value;
    const email = e.target.email?.value;
    const message = e.target.message.value;
    const linkedinProfileId = e.target.linkedinProfileId?.value;

    if (contactMedium === 'email') {
      // Redirect to email client
      window.location.href = `mailto:rjturingan27@gmail.com?subject=Contact from ${name}&body=${message}`;
    } else if (contactMedium === 'sms') {
      // Redirect to SMS app
      window.location.href = `sms:09210266326?body=${message}`;
    } else if (contactMedium === 'linkedin') {
      // Redirect to LinkedIn messaging interface with pre-filled message
      const encodedMessage = encodeURIComponent(message);
      window.open(`https://www.linkedin.com/messaging/compose/?to=${linkedinProfileId}&text=${encodedMessage}`, '_blank');
    }
  };

  return (
    <section id="contact" className="contact-container">
      <h2>Contact</h2>
      <div className="contact-icons">
        <div
          className={`icon ${contactMedium === 'email' ? 'active' : ''}`}
          onClick={() => setContactMedium('email')}
        >
          <FaEnvelope />
          <span>Email</span>
        </div>
        <div
          className={`icon ${contactMedium === 'sms' ? 'active' : ''}`}
          onClick={() => setContactMedium('sms')}
        >
          <FaSms />
          <span>SMS</span>
        </div>
        <div
          className={`icon ${contactMedium === 'linkedin' ? 'active' : ''}`}
          onClick={() => setContactMedium('linkedin')}
        >
          <FaLinkedin />
          <span>LinkedIn</span>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        {contactMedium === 'email' && (
          <>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
          </>
        )}
        {contactMedium === 'linkedin' && (
          <div className="form-group">
            <label htmlFor="linkedinProfileId">LinkedIn Profile ID:</label>
            <input type="text" id="linkedinProfileId" name="linkedinProfileId" required />
          </div>
        )}
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Contact;