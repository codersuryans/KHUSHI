import React, { useContext, useState } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { CartContext } from '../context/CartContext';
import logo from '../assets/logo.png';

const Navbar = () => {
  const { getCartCount, setIsCartOpen } = useContext(CartContext);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-brand">
          <img src={logo} alt="Khushi Chandi" className="nav-logo"
            onError={(e) => { e.target.onerror = null; e.target.src = "https://via.placeholder.com/48x48/111/d4af37?text=KC"; }} />
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
            <ShoppingBag size={26} />
            {getCartCount() > 0 && <span className="cart-count">{getCartCount()}</span>}
          </div>
          <button className="menu-toggle" onClick={() => setIsMobileOpen(!isMobileOpen)}>
            {isMobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
