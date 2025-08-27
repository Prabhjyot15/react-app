import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="about-us-container">
      <h1 className="about-us-heading">Get to Know Us</h1>

      <p className="about-us-description">
        At <strong>Paradise Nursery</strong>, we believe that plants aren't just decorations — they're a way of life.
      </p>

      <div className="about-us-section">
        <p className="about-us-content">
          Founded out of a love for nature and a desire to bring more green into everyday spaces, Paradise Nursery offers
          a curated selection of plants for homes, offices, and everything in between. Whether you're new to gardening or
          have a seasoned green thumb, our collection has something for everyone.
        </p>
        <img
          className="plant-logo"
          src="https://p1.hiclipart.com/preview/922/979/640/green-leaf-logo-emoji-seedling-emoticon-sticker-plant-plant-stem-flower-png-clipart-thumbnail.jpg"
          alt="Leaf logo"
          height="50"
          width="50"
        />
      </div>

      <div className="about-us-section">
        <p className="about-us-content">
          From lush indoor foliage to easy-care succulents, each plant is hand-picked and nurtured by our team of
          plant-loving professionals. We don’t just sell plants — we help you grow them with confidence through expert
          advice, care tips, and personalized support.
        </p>
        <img
          className="plant-logo"
          src="https://p1.hiclipart.com/preview/922/979/640/green-leaf-logo-emoji-seedling-emoticon-sticker-plant-plant-stem-flower-png-clipart-thumbnail.jpg"
          alt="Leaf logo"
          height="50"
          width="50"
        />
      </div>

      <div className="about-us-section">
        <p className="about-us-content">
          Our mission is simple: to help people reconnect with nature — one plant at a time. We invite you to explore our
          nursery, ask questions, and let us help you turn your space into a green oasis.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
