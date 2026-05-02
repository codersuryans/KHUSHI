import React from 'react';
import { MessageCircle, Phone, Camera, MapPin } from 'lucide-react';
import logo from '../assets/logo.jpg';

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <img src={logo} alt="Khushi Chandi Logo" className="footer-logo" onError={(e) => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/80?text=KC'; }} />
              <h3>Khushi Chandi Jewellery</h3>
              <p>Your trusted destination for pure 925 sterling silver jewellery in Bhadrak, Odisha. Hallmarked. Authentic. Affordable.</p>
            </div>

            <div className="footer-col">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#products">Shop Collection</a></li>
                <li><a href="#reviews">Customer Reviews</a></li>
                <li><a href="#contact">Contact Us</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Contact</h4>
              <ul>
                <li>
                  <a href="tel:+919556534129"><Phone size={14} /> +91 9556534129</a>
                </li>
                <li>
                  <a href="https://wa.me/919556534129" target="_blank" rel="noreferrer"><MessageCircle size={14} /> WhatsApp</a>
                </li>
                <li>
                  <a href="https://www.instagram.com/khushi_chandi_jewellery_shop" target="_blank" rel="noreferrer"><Camera size={14} /> @khushi_chandi_jewellery_shop</a>
                </li>
                <li>
                  <span><MapPin size={14} /> Bhadrak Bypass, Odisha</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} Khushi Chandi Jewellery Shop. All rights reserved. | Pure 925 Silver | Bhadrak, Odisha</p>
          </div>
        </div>
      </footer>
      <div style={{ backgroundColor: '#d4af37', color: '#000', padding: '12px', textAlign: 'center', fontWeight: 'bold', fontSize: '0.9rem', letterSpacing: '1px' }}>
        This is a Demo Website developed by Jagannath Global Tech
      </div>
    </>
  );
};

export default Footer;
