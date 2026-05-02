import React from 'react';
import { MessageCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <span className="hero-tag">✦ Est. in Bhadrak, Odisha ✦</span>
        <h1 className="hero-title">Pure Silver.<br />Pure Elegance.</h1>
        <p className="hero-subtitle">
          Where every jewel tells a story — handcrafted 925 sterling silver at prices you'll love.
        </p>
        <div className="hero-stats">
          <div className="hero-stat">
            <strong>500+</strong>
            <span>Happy Customers</span>
          </div>
          <div className="hero-stat-divider"></div>
          <div className="hero-stat">
            <strong>100%</strong>
            <span>Pure 925 Silver</span>
          </div>
          <div className="hero-stat-divider"></div>
          <div className="hero-stat">
            <strong>5★</strong>
            <span>Rated Shop</span>
          </div>
        </div>
        <div className="hero-buttons">
          <a href="#products" className="btn btn-gold-large">
            Explore Collection
          </a>
          <a
            href="https://wa.me/919556534129?text=Hello!%20I%20want%20to%20know%20more%20about%20your%20silver%20jewellery."
            target="_blank"
            rel="noreferrer"
            className="btn btn-whatsapp-large"
          >
            <MessageCircle size={20} />
            Order on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
