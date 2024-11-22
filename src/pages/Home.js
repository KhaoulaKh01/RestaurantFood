import React from 'react';
import { Link } from 'react-router-dom';
import BannerImage from '../Assests/home.jpeg';
import "../styles/Home.css";

function Home() {
  return (
    <div className='home' style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className='headerContainer'>
        <h1>Khaoula's food</h1>
        
        <p>Enjoy fresh, delicious dishes in a cozy, welcoming atmosphere.</p>
        <p>Our menu combines classic favorites with creative flavors, perfect for any occasion.</p>
        <p>Experience great food and friendly service that will make your visit memorable.</p>
        <Link to="/menu">
        <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
  )
}

export default Home