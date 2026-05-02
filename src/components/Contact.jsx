import React from 'react';
import { MapPin, Phone, MessageCircle, Instagram } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Get in Touch</h2>
        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">
                <MapPin size={28} />
              </div>
              <div className="contact-details">
                <h4>Visit Our Store</h4>
                <p>Bhadrak Bypass, Odisha, India</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">
                <Phone size={28} />
              </div>
              <div className="contact-details">
                <h4>Call Us</h4>
                <a href="tel:+919556534129">+91 9556534129</a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <MessageCircle size={28} />
              </div>
              <div className="contact-details">
                <h4>WhatsApp</h4>
                <a href="https://wa.me/919556534129" target="_blank" rel="noreferrer">Chat with us directly</a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <Instagram size={28} />
              </div>
              <div className="contact-details">
                <h4>Instagram</h4>
                <a href="https://www.instagram.com/khushi_chandi_jewellery_shop" target="_blank" rel="noreferrer">@khushi_chandi_jewellery_shop</a>
              </div>
            </div>
          </div>

          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118949.11717205166!2d86.4402484089069!3d21.058349271617436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1be70bfa099511%3A0xc6a8c4bdce928810!2sBhadrak%2C%20Odisha!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Store Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
