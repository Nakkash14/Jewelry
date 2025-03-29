import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Gold Necklace', price: 499.99, quantity: 1 },
    { id: 2, name: 'Diamond Ring', price: 1299.99, quantity: 2 },
    { id: 3, name: 'Silver Bracelet', price: 299.99, quantity: 1 },
  ]);

  const updateQuantity = (id, delta) => {
    setCartItems(cartItems.map(item => (
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
    )));
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

//   console.log(cartItems);

  return (
    <motion.div
      className="cart-page modern-background"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="modern-cart-container">
        <h1 className="modern-cart-title">Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="empty-cart-message">
            <p>Your cart is empty!</p>
            <br></br>
            <Link to="/shop" className="modern-btn shop-btn">Start Shopping</Link>
          </div>
        ) : (
          <>
            <div className="modern-cart-items">
              {cartItems.map((item) => (
                <div className="modern-cart-item" key={item.id}>
                  <div className="modern-item-info">
                    <h3 className="modern-item-name">{item.name}</h3>
                    <div className="modern-item-controls">
                      <button className="modern-quantity-btn" onClick={() => updateQuantity(item.id, -1)}>-</button>
                      <span className="modern-item-quantity">{item.quantity}</span>
                      <button className="modern-quantity-btn" onClick={() => updateQuantity(item.id, 1)}>+</button>
                    </div>
                  </div>
                  <div className="modern-item-actions">
                    <span className="modern-item-price">${(item.price * item.quantity).toFixed(2)}</span>
                    <button className="remove-item-btn" onClick={() => removeItem(item.id)}>Remove</button>
                  </div>
                </div>
              ))}
            </div>

            <div className="modern-cart-summary">
              <span>Total:</span>
              <span className="summary-price">${totalPrice.toFixed(2)}</span>
            </div>

            <div className="modern-cart-buttons">
              <Link to="/checkout" className="modern-btn checkout-btn">Checkout</Link>
              <Link to="/shop" className="modern-btn shop-btn">Continue Shopping</Link>
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
};

export default Cart;