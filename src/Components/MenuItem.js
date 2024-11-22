// MenuItem.js
import React from "react";

function MenuItem({ image, name, price, addToCart }) {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}></div>
      <h3>{name}</h3>
      <p>${price}</p>
      <button 
        className="buyButton" 
        onClick={() => addToCart({ name, price, image })} // Ajouter l'image ici
      >
        Buy Now
      </button>
    </div>
  );
}

export default MenuItem;
