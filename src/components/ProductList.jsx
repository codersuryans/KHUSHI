import React from 'react';
import ProductCard from './ProductCard';

import img1 from '../assets/product1.jpg';
import img2 from '../assets/product2.jpg';
import img3 from '../assets/product3.jpg';

const products = [
  {
    id: 1,
    name: 'Exclusive Silver Jewellery Set',
    price: 3499,
    desc: 'Exquisite 925 silver craftsmanship directly from our store.',
    image: img1,
  },
  {
    id: 2,
    name: 'Premium Silver Collection',
    price: 2799,
    desc: 'Authentic hallmark silver, perfect for any occasion.',
    image: img2,
  },
  {
    id: 3,
    name: 'Traditional Silver Ornaments',
    price: 4199,
    desc: 'Classic Odia silver designs with stunning details.',
    image: img3,
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
