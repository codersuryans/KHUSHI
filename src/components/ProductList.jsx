import React from 'react';
import ProductCard from './ProductCard';

// ONLY real shop images — as instructed
import img1 from '../assets/product1.jpg'; // Silver Chains
import img2 from '../assets/product2.jpg'; // Silver Bracelets
import img3 from '../assets/product3.jpg'; // 925 Silver Necklace Sets
import img4 from '../assets/product4.jpg'; // Mixed Silver Items

const products = [
  {
    id: 1,
    name: 'Pure Silver Chain Collection',
    price: 2499,
    desc: 'Hallmarked 925 sterling silver chains — multiple designs available',
    image: img1,
  },
  {
    id: 2,
    name: 'Designer Silver Bracelet Set',
    price: 1999,
    desc: 'Premium sterling silver bracelets, perfect for daily wear & gifting',
    image: img2,
  },
  {
    id: 3,
    name: '925 Silver Necklace Set',
    price: 3499,
    desc: 'Classic silver necklaces handcrafted with finest 925 pure silver',
    image: img3,
  },
  {
    id: 4,
    name: 'Silver Jewellery Combo',
    price: 2799,
    desc: 'Curated silver jewellery set — ideal for occasions & gifting',
    image: img4,
  },
  {
    id: 5,
    name: 'Fancy Silver Chain (SSS)',
    price: 1799,
    desc: 'Trending fancy silver chain — lightweight & stylish for everyday use',
    image: img1,
  },
  {
    id: 6,
    name: 'Heavy Silver Kada Bracelet',
    price: 3299,
    desc: 'Bold sterling silver kada — a must-have for festive occasions',
    image: img2,
  },
  {
    id: 7,
    name: 'Traditional Silver Pendant Set',
    price: 2199,
    desc: 'Elegant silver pendant necklace — perfect for weddings & puja',
    image: img3,
  },
  {
    id: 8,
    name: 'Silver Jewellery Gift Set',
    price: 4499,
    desc: 'Beautiful silver jewellery combo — perfect for bridal gifting',
    image: img4,
  },
];

const ProductList = () => {
  return (
    <section id="products" className="products-section">
      <div className="container">
        <div className="section-tag-wrap">
          <span className="section-tag">Our Collection</span>
        </div>
        <h2 className="section-title">Crafted in Pure Silver</h2>
        <p className="section-subtitle">
          Every piece is hallmarked, pure and timeless — made to be worn and treasured for generations.
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
