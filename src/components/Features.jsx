import React from 'react';
import { ShieldCheck, Gem, Sparkles, Truck, Award, Heart } from 'lucide-react';

const features = [
  {
    icon: <ShieldCheck size={44} />,
    title: 'Hallmarked & Certified',
    desc: 'Every piece is BIS Hallmarked with guaranteed 92.5% pure silver purity — wear with total confidence.',
  },
  {
    icon: <Gem size={44} />,
    title: 'Unbeatable Prices',
    desc: 'Straight from the source with zero middleman markup. Get luxury silver jewellery at honest prices.',
  },
  {
    icon: <Sparkles size={44} />,
    title: 'Latest Trending Designs',
    desc: 'From traditional Odia patterns to modern minimalist styles — our collection is updated every season.',
  },
  {
    icon: <Truck size={44} />,
    title: 'Quick WhatsApp Delivery',
    desc: 'Order directly via WhatsApp and get doorstep delivery anywhere in India — fast and trackable.',
  },
  {
    icon: <Award size={44} />,
    title: 'Trusted by 500+ Families',
    desc: 'Worn at weddings, celebrations & daily life — thousands of happy customers trust Khushi Chandi.',
  },
  {
    icon: <Heart size={44} />,
    title: 'Made with Love & Craft',
    desc: 'Each ornament is crafted with artisan attention to detail, inspired by Odisha\'s rich silver tradition.',
  },
];

const Features = () => {
  return (
    <section className="features">
      <div className="container">
        <span className="section-tag">Why Choose Us</span>
        <h2 className="section-title">The Khushi Chandi Difference</h2>
        <p className="section-subtitle">
          We are not just a jewellery shop — we are your trusted silver destination in Bhadrak.
        </p>
        <div className="features-grid">
          {features.map((f, i) => (
            <div className="feature-card" key={i}>
              <div className="feature-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
