import React, { useState } from 'react';
import { personalData } from '../../data/personal';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import Button from '../../components/Button/Button';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <SectionTitle title="Get In Touch" subtitle="Let's work together" />
        <div className="contact-content">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <div className="info-item">
              <strong>Email:</strong>
              <a href={`mailto:${personalData.email}`}>{personalData.email}</a>
            </div>
            <div className="info-item">
              <strong>Phone:</strong>
              <a href={`tel:${personalData.phone}`}>{personalData.phone}</a>
            </div>
            <div className="info-item">
              <strong>Location:</strong>
              <span>{personalData.location}</span>
            </div>
            <div className="social-links">
              <a href={personalData.socialLinks.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href={personalData.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href={personalData.socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
              ></textarea>
            </div>
            <Button type="submit" variant="primary">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

