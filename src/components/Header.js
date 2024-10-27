// Header.js
import React, { useEffect, useState } from 'react';
import { Galleria } from 'primereact/galleria';
import { PhotoService } from '../service/PhotoService';
import './Header.css'; 

const Header = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    PhotoService.getImages().then((data) => setImages(data));
  }, []);

  const handleExploreClick = () => {
    const overviewSection = document.getElementById('overview');
    overviewSection.scrollIntoView({ behavior: 'smooth' });
  };

  const itemTemplate = (item) => (
    <div className="galleria-item">
      <img src={item.itemImageSrc} alt={item.alt} className="galleria-image" />
      <div className="hero-overlay">
        <div className="hero-content">
          <p>
            Elevating Efficiency and Sustainability in Large-Scale Coconut Oil 
            Manufacturing through Progressive Strategies
          </p>
          <button className="cta-button" onClick={handleExploreClick}>
            Explore More
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="header-container">
      <Galleria
        value={images}
        item={itemTemplate}
        autoPlay
        circular
        showThumbnails={false}
        showIndicators
        style={{ width: '100%' }}
      />
    </div>
  );
};

export default Header;
