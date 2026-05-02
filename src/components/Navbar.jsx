import React, { useContext, useState } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { CartContext } from '../context/CartContext';
import logo from '../assets/logo.png'; // Make sure logo.png exists in assets folder

const Navbar = () => {
  const { getCartCount, setIsCartOpen } = useContext(CartContext);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-brand">
          <img src={logo} alt="Khushi Chandi" className="nav-logo" onError={(e) => { e.target.onerror = null; e.target.src = "https://via.placeholder.com/50x50.png?text=KC" }} />
          <h1>Khushi Chandi</h1>
        </div>

        <div className={`nav-links ${isMobileOpen ? 'mobile-open' : ''}`}>
          <a href="#home" className="nav-link" onClick={() => setIsMobileOpen(false)}>Home</a>
          <a href="#products" className="nav-link" onClick={() => setIsMobileOpen(false)}>Shop</a>
          <a href="#reviews" className="nav-link" onClick={() => setIsMobileOpen(false)}>Reviews</a>
          <a href="#contact" className="nav-link" onClick={() => setIsMobileOpen(false)}>Contact</a>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div className="cart-icon-container" onClick={() => setIsCartOpen(true)}>
            <ShoppingBag size={24} />
            {getCartCount() > 0 && (
              <span className="cart-count">{getCartCount()}</span>
            )}
          </div>
          <button className="menu-toggle" onClick={() => setIsMobileOpen(!isMobileOpen)}>
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
