import React from 'react';
import ProductCard from './ProductCard';

// Using local images as required
import img1 from '../assets/product1.jpg';
import img2 from '../assets/product2.jpg';
import img3 from '../assets/product3.jpg';
import img4 from '../assets/product4.jpg';

const products = [
  {
    id: 1,
    name: 'Elegant Silver Necklace',
    price: 1499,
    image: img1,
  },
  {
    id: 2,
    name: 'Classic Silver Ring',
    price: 499,
    image: img2,
  },
  {
    id: 3,
    name: 'Silver Drop Earrings',
    price: 799,
    image: img3,
  },
  {
    id: 4,
    name: 'Premium Silver Bracelet',
    price: 1199,
    image: img4,
  },
  // Adding placeholders just in case
  {
    id: 5,
    name: 'Traditional Silver Payal',
    price: 2499,
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80',
  },
  {
    id: 6,
    name: 'Designer Silver Chain',
    price: 899,
    image: 'https://images.unsplash.com/photo-1599643477877-530e5562020f?auto=format&fit=crop&q=80',
  }
];

const ProductList = () => {
  return (
    <section id="products" className="products-section">
      <div className="container">
        <h2 className="section-title">Our Collection</h2>
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
