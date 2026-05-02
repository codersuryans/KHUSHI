import React, { useContext } from 'react';
import { X, Plus, Minus, Trash2 } from 'lucide-react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, getCartTotal } = useContext(CartContext);

  const handleWhatsAppCheckout = () => {
    if (cart.length === 0) return;

    let message = "Hello, I want to order:\n\n";
    cart.forEach((item, index) => {
      message += `${index + 1}. ${item.name} - ₹${item.price} x ${item.quantity}\n`;
    });
    
    message += `\n*Total: ₹${getCartTotal()}*`;
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919556534129?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className={`cart-overlay ${isCartOpen ? 'open' : ''}`} onClick={() => setIsCartOpen(false)}>
      <div className="cart-panel" onClick={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <h2>Your Cart</h2>
          <button className="close-cart" onClick={() => setIsCartOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <div className="cart-items">
          {cart.length === 0 ? (
            <p className="cart-empty">Your cart is empty.</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-img" onError={(e) => { e.target.onerror = null; e.target.src = "https://via.placeholder.com/80x80.png?text=IMG" }} />
                <div className="cart-item-info">
                  <h4 className="cart-item-title">{item.name}</h4>
                  <p className="cart-item-price">₹{item.price}</p>
                  <div className="cart-item-controls">
                    <button className="qty-btn" onClick={() => updateQuantity(item.id, -1)}>
                      <Minus size={14} />
                    </button>
                    <span>{item.quantity}</span>
                    <button className="qty-btn" onClick={() => updateQuantity(item.id, 1)}>
                      <Plus size={14} />
                    </button>
                    <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <span>Total:</span>
              <span>₹{getCartTotal()}</span>
            </div>
            <button className="btn btn-primary whatsapp-checkout-btn" onClick={handleWhatsAppCheckout}>
              Place Order on WhatsApp
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
