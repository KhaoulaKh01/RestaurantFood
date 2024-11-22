// About.js
import React from "react";
import "../styles/About.css";

function About() {
  return (
    <section className="about">
      <h2>About</h2>

      {/* Restaurant Story */}
      <div className="section story">
        <h3>Our Story</h3>
        <p>
          Since opening in 2023, we’ve crafted an inviting space where global flavors meet locally sourced ingredients. 
          From the vibrant streets of Italy to the rich aromas of Morocco, our menu celebrates culinary diversity, bringing 
          together classic favorites and unique dishes to suit every palate.
        </p>
      </div>

      {/* Chef and Team */}
      <div className="section chef-team">
        <h3>Our Chef & Team</h3>
        <p>
          Led by Chef Luca Marino, our team brings together culinary talents from around the world. Each team member 
          contributes unique skills and perspectives, creating a menu that reflects the authentic tastes of multiple cultures. 
          Our chef’s philosophy is rooted in quality, ensuring that every dish is crafted with passion and precision.
        </p>
      </div>

      {/* Values and Sourcing */}
      <div className="section values-sourcing">
        <h3>Values & Sourcing</h3>
        <p>
          We believe in quality and sustainability. Our ingredients are sourced locally whenever possible, while specialty 
          items like Moroccan mint and Italian tomatoes are carefully selected to ensure authenticity. We aim to create an 
          enjoyable dining experience that’s both memorable and responsibly made.
        </p>
      </div>
    </section>
  );
}

export default About;
