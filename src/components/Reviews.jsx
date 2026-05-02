import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: "Priyanka Sahoo",
    text: "Bought a silver necklace for my mother. The quality is exceptional and the design is very traditional. Highly recommended!",
    rating: 5
  },
  {
    id: 2,
    name: "Rakesh Das",
    text: "Very affordable prices compared to other shops in Bhadrak. The staff was very polite and showed many latest designs.",
    rating: 5
  },
  {
    id: 3,
    name: "Smita Mishra",
    text: "I loved the silver earrings I purchased from Khushi Chandi. They have a huge collection of pure silver items.",
    rating: 4
  },
  {
    id: 4,
    name: "Lipika Rout",
    text: "Best jewellery shop near Bhadrak bypass. The WhatsApp ordering feature is so convenient!",
    rating: 5
  }
];

const Reviews = () => {
  return (
    <section id="reviews" className="reviews-section">
      <div className="container">
        <h2 className="section-title">Customer Reviews</h2>
        <div className="reviews-grid">
          {reviews.map((review) => (
            <div key={review.id} className="review-card">
              <div className="stars">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="review-text">"{review.text}"</p>
              <h4 className="reviewer">- {review.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
