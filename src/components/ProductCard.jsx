import React, { useContext } from 'react';
import { ShoppingCart, Star } from 'lucide-react';
import { CartContext } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img
          src={product.image}
          alt={product.name}
          className="product-image"
          loading="lazy"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = `https://via.placeholder.com/600x400/111111/d4af37?text=${encodeURIComponent(product.name)}`;
          }}
        />
        <div className="product-badge">925 Silver</div>
      </div>
      <div className="product-info">
        <div className="product-stars">
          {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="#d4af37" color="#d4af37" />)}
        </div>
        <h3 className="product-name">{product.name}</h3>
        <p className="product-desc">{product.desc}</p>
        <div className="product-footer">
          <span className="product-price">₹{product.price.toLocaleString('en-IN')}</span>
          <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
            <ShoppingCart size={16} />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
