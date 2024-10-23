import React, { useState } from 'react';
import './ImageSlider.css';

const ImageSlider = ({ images }) => {
  const [currentText, setCurrentText] = useState(images[0].text);

  const handleMouseEnter = (text) => {
    setCurrentText(text);
  };

  return (
    <div className="slider-container">
      <div className="image-slider">
        {images.map((image, index) => (
          <div
            key={index}
            className="slider-image"
            onMouseEnter={() => handleMouseEnter(image.text)}
            style={{ backgroundImage: `url(${image.url})` }}
          ></div>
        ))}
      </div>
      <p className="slider-text">{currentText}</p>
    </div>
  );
};

export default ImageSlider;
