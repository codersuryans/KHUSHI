import React from 'react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Priyanka Sahoo',
    location: 'Bhadrak, Odisha',
    text: 'I bought a silver necklace for my sister\'s wedding from Khushi Chandi and everyone at the ceremony couldn\'t stop complimenting it! The quality is phenomenal — pure and shiny even after months.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/80?img=47',
  },
  {
    name: 'Rakesh Kumar Das',
    location: 'Jajpur, Odisha',
    text: 'Best silver shop in the Bhadrak district! I compared prices with 4 other shops — Khushi Chandi is 30% cheaper and the quality is far better. My wife is obsessed with her new payal!',
    rating: 5,
    avatar: 'https://i.pravatar.cc/80?img=12',
  },
  {
    name: 'Smita Mishra',
    location: 'Bhubaneswar, Odisha',
    text: 'Ordered via WhatsApp and received my silver Jhumkas within 2 days. The packaging was beautiful, the product was even better. 100% genuine silver. Highly recommend!',
    rating: 5,
    avatar: 'https://i.pravatar.cc/80?img=32',
  },
  {
    name: 'Lipika Rout',
    location: 'Kendrapara, Odisha',
    text: 'My mother has been buying silver here for 3 years. Every single piece has maintained its shine. The silver quality is top-notch and the staff is very helpful. 5 stars!',
    rating: 5,
    avatar: 'https://i.pravatar.cc/80?img=56',
  },
  {
    name: 'Anil Behera',
    location: 'Balasore, Odisha',
    text: 'Excellent customer service! I called them and they helped me choose the perfect anniversary gift for my wife. The kada I bought looks absolutely stunning. Will shop again!',
    rating: 5,
    avatar: 'https://i.pravatar.cc/80?img=7',
  },
];

const Reviews = () => {
  return (
    <section id="reviews" className="reviews-section">
      <div className="container">
        <span className="section-tag">Customer Love</span>
        <h2 className="section-title">What Our Customers Say</h2>
        <p className="section-subtitle">
          Real people, real silver, real smiles — join hundreds of happy families across Odisha.
        </p>
        <div className="reviews-grid">
          {reviews.map((review, i) => (
            <div key={i} className="review-card">
              <Quote size={32} className="quote-icon" />
              <div className="stars">
                {[...Array(review.rating)].map((_, j) => (
                  <Star key={j} size={16} fill="#d4af37" color="#d4af37" />
                ))}
              </div>
              <p className="review-text">{review.text}</p>
              <div className="reviewer-info">
                <img src={review.avatar} alt={review.name} className="reviewer-avatar" onError={(e) => { e.target.onerror = null; e.target.src='https://via.placeholder.com/80?text=U'; }} />
                <div>
                  <h4 className="reviewer">{review.name}</h4>
                  <span className="reviewer-location">{review.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
