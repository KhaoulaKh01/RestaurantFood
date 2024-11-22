// CartModal.js
import React, { useState } from 'react';
import '../styles/CartModal.css';

function CartModal({ cartItems, removeFromCart, isOpen, toggleCart }) {
  const [showCheckout, setShowCheckout] = useState(false);

  const handleCheckout = () => {
    setShowCheckout(true);
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    isOpen && (
      <div className="cartModal">
        <h2>My Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cartItems.map((item, index) => (
            <div key={index} className="cartItem">
              <p>{item.name}</p>
              <p>${item.price}</p>
              <button onClick={() => removeFromCart(index)}>Remove</button>
            </div>
          ))
        )}
        <div className="totalPrice">
          <p>Total: ${totalPrice.toFixed(2)}</p>
        </div>
        <button className="checkoutButton" onClick={handleCheckout}>Checkout</button>
        
        {showCheckout && (
          <div className="checkoutModal">
            <h3>Checkout</h3>
            <form>
              <input type="text" placeholder="Card Number" required />
              <input type="text" placeholder="Name on Card" required />
              <input type="text" placeholder="Expiry Date" required />
              <input type="text" placeholder="CVV" required />
              <input type="text" placeholder="Address" required />
              <button type="submit">Confirm Payment</button>
            </form>
          </div>
        )}
        <button onClick={toggleCart}>Close</button>
      </div>
    )
  );
}

export default CartModal;
