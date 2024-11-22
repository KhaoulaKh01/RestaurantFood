// App.js
import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Footer from './Components/Footer';
import CartPage from './pages/CartPage'; // Importez la page de panier
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [cartItems, setCartItems] = useState([]);

  // Fonction pour ajouter un article au panier
  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  // Fonction pour supprimer un article du panier
  const removeFromCart = (index) => {
    setCartItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  // Calcul du montant total
  const totalAmount = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="App">
      <Router>
        <Navbar cartItems={cartItems} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu addToCart={addToCart} />} />
          <Route path="/about" element={<About />} />
          {/* Route vers la page du panier */}
          <Route 
            path="/cart" 
            element={
              <CartPage 
                cartItems={cartItems} 
                removeFromCart={removeFromCart} 
                totalAmount={totalAmount}
              />
            } 
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
