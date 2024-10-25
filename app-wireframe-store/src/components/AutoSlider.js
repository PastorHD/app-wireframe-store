import React, { useState, useEffect } from 'react';
import './AutoSlider.css';

const AutoSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    'https://i.imgur.com/5XKGMAC.png',
    'https://i.imgur.com/nwfF6bi.png',
    'https://i.imgur.com/Su675xc.png'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Cambia cada 3 segundos

    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  }, [images.length]);

  return (
    <div className="slider-container">
      <div className="image-stack">
        {images.map((image, index) => (
          <div
            key={index}
            className={`auto-slider-image ${
              index === currentImageIndex
                ? 'active'
                : index === (currentImageIndex + 1) % images.length
                ? 'next'
                : 'previous'
            }`}
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default AutoSlider;
