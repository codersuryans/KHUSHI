import React from 'react';
import { Gem, IndianRupee, Sparkles } from 'lucide-react';

const Features = () => {
  return (
    <section className="features">
      <div className="container">
        <div className="features-grid">
          <div className="feature-card">
            <Gem size={48} className="feature-icon" />
            <h3>Pure Silver Jewellery</h3>
            <p>100% authentic and certified pure silver ornaments crafted with precision.</p>
          </div>
          <div className="feature-card">
            <IndianRupee size={48} className="feature-icon" />
            <h3>Affordable Pricing</h3>
            <p>Experience luxury without the premium markup. Best prices guaranteed.</p>
          </div>
          <div className="feature-card">
            <Sparkles size={48} className="feature-icon" />
            <h3>Latest Designs</h3>
            <p>Constantly updated collections featuring modern and traditional aesthetics.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
