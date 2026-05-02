import React from 'react';
import { MapPin, Phone, MessageCircle, Camera, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <span className="section-tag">Find Us</span>
        <h2 className="section-title">Visit or Contact Us</h2>
        <p className="section-subtitle">
          Come experience the glitter of pure silver in person, or order right now on WhatsApp!
        </p>

        <div className="contact-cta-bar">
          <a href="tel:+919556534129" className="cta-pill cta-call">
            <Phone size={20} />
            Call: +91 9556534129
          </a>
          <a href="https://wa.me/919556534129?text=Hello!%20I%20want%20to%20order%20silver%20jewellery." target="_blank" rel="noreferrer" className="cta-pill cta-whatsapp">
            <MessageCircle size={20} />
            WhatsApp Us Now
          </a>
          <a href="https://www.instagram.com/khushi_chandi_jewellery_shop" target="_blank" rel="noreferrer" className="cta-pill cta-instagram">
            <Camera size={20} />
            Follow on Instagram
          </a>
        </div>

        <div className="contact-grid">
          <div className="contact-info-card">
            <div className="contact-item">
              <div className="contact-icon"><MapPin size={26} /></div>
              <div className="contact-details">
                <h4>Our Location</h4>
                <p>Khushi Chandi Jewellery Shop</p>
                <p>Bhadrak Bypass, Odisha, India</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon"><Clock size={26} /></div>
              <div className="contact-details">
                <h4>Shop Hours</h4>
                <p>Mon–Sat: 9:00 AM – 8:00 PM</p>
                <p>Sunday: 10:00 AM – 6:00 PM</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon"><Phone size={26} /></div>
              <div className="contact-details">
                <h4>Call Directly</h4>
                <p>+91 9556534129</p>
              </div>
            </div>
            <div className="contact-promo-box">
              <h3>🎁 FREE Gift Wrapping</h3>
              <p>On all orders above ₹1500. Call or WhatsApp to avail this offer!</p>
            </div>
          </div>

          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59505.11558537574!2d86.46965!3d21.066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1be70bfa099511%3A0xc6a8c4bdce928810!2sBhadrak%2C%20Odisha!5e0!3m2!1sen!2sin!4v1683800000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Khushi Chandi Store Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
