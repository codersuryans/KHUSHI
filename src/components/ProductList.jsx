import React from 'react';
import ProductCard from './ProductCard';

// ALL REAL shop product images (from actual store)
import img1 from '../assets/product1.jpg';
import img2 from '../assets/product2.jpg';
import img3 from '../assets/product3.jpg';
import img4 from '../assets/product4.jpg';
import img5 from '../assets/product5.jpg';
import img6 from '../assets/product6.jpg';

const products = [
  {
    id: 1,
    name: 'Pure Silver Chain — SSS Collection',
    price: 2499,
    desc: 'Hallmarked 925 silver chains, multiple styles — perfect for gifting',
    image: img1,
  },
  {
    id: 2,
    name: 'Designer Silver Bracelet Set',
    price: 2799,
    desc: 'Premium sterling silver bracelets — ideal for all occasions',
    image: img2,
  },
  {
    id: 3,
    name: 'Classic Silver Bracelet — DS91',
    price: 3199,
    desc: 'Bold & elegant 925 silver bracelet for men and women',
    image: img3,
  },
  {
    id: 4,
    name: '925 Silver Necklace Set',
    price: 4299,
    desc: 'Stunning multi-piece necklace set in pure 925 silver',
    image: img4,
  },
  {
    id: 5,
    name: 'Silver Kada & Bangle Combo',
    price: 3799,
    desc: 'Traditional silver kada — a wedding and festival favourite',
    image: img5,
  },
  {
    id: 6,
    name: 'Fancy Silver Chain — Exclusive',
    price: 1999,
    desc: 'Lightweight fancy silver chain — trendy & affordable',
    image: img6,
  },
];

const ProductList = () => {
  return (
    <section id="products" className="products-section">
      <div className="container">
        <div className="section-tag-wrap">
          <span className="section-tag">Our Collection</span>
        </div>
        <h2 className="section-title">Shop Our Silver Collection</h2>
        <p className="section-subtitle">
          Every piece is BIS Hallmarked, genuine 925 silver — photographed directly from our store in Bhadrak.
        </p>
        <div className="products-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
