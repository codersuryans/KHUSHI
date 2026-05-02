import React, { useContext } from 'react';
import { X, Plus, Minus, Trash2, MessageCircle } from 'lucide-react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, getCartTotal } = useContext(CartContext);

  const handleWhatsAppCheckout = () => {
    if (cart.length === 0) return;
    let message = "Hello! I want to order from *Khushi Chandi Jewellery Shop*:\n\n";
    cart.forEach((item, i) => {
      message += `${i + 1}. ${item.name} — ₹${item.price.toLocaleString('en-IN')} × ${item.quantity}\n`;
    });
    message += `\n*Total: ₹${getCartTotal().toLocaleString('en-IN')}*\n\nPlease confirm my order. 🙏`;
    window.open(`https://wa.me/919556534129?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className={`cart-overlay ${isCartOpen ? 'open' : ''}`} onClick={() => setIsCartOpen(false)}>
      <div className="cart-panel" onClick={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <h2>Your Cart</h2>
          <button className="close-cart" onClick={() => setIsCartOpen(false)}><X size={24} /></button>
        </div>

        <div className="cart-items">
          {cart.length === 0 ? (
            <p className="cart-empty">🛒 Your cart is empty.<br /><br />Browse our pure silver collection!</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-img"
                  onError={(e) => { e.target.onerror = null; e.target.src = `https://via.placeholder.com/80?text=silver`; }} />
                <div className="cart-item-info">
                  <h4 className="cart-item-title">{item.name}</h4>
                  <p className="cart-item-price">₹{item.price.toLocaleString('en-IN')}</p>
                  <div className="cart-item-controls">
                    <button className="qty-btn" onClick={() => updateQuantity(item.id, -1)}><Minus size={13} /></button>
                    <span style={{ fontWeight: 700, minWidth: '20px', textAlign: 'center' }}>{item.quantity}</span>
                    <button className="qty-btn" onClick={() => updateQuantity(item.id, 1)}><Plus size={13} /></button>
                    <button className="remove-btn" onClick={() => removeFromCart(item.id)}><Trash2 size={17} /></button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <span>Total</span>
              <span>₹{getCartTotal().toLocaleString('en-IN')}</span>
            </div>
            <button className="btn-wa-checkout" onClick={handleWhatsAppCheckout}>
              <MessageCircle size={20} />
              Place Order on WhatsApp
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
