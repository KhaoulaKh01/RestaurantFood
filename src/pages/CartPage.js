// CartPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/CartPage.css"

function CartPage({ cartItems, removeFromCart }) {
  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
        <div>
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-info">
                <p>{item.name}</p>
                <p>Prix : {item.price}€</p>
              </div>
              <button onClick={() => removeFromCart(index)} className="remove-item-btn">
                Delete
              </button>
            </div>
          ))}
          <div className="total">
            <p>Total : {cartItems.reduce((total, item) => total + item.price, 0)}€</p>
            <Link to="/checkout">
              <button className="checkout-btn">Check Out</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;
