import React, { useState, useEffect } from 'react';
import './AutoSlider.css';

const AutoSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    { url: 'https://i.imgur.com/5XKGMAC.png', link: 'https://www.xataka.com/empresas-y-economia/a-risc-v-le-ha-salido-aliado-inesperado-nvidia-ha-producido-1-000-millones-nucleos-este-tipo-2024' },
    { url: 'https://i.imgur.com/nwfF6bi.png', link: 'https://www.xataka.com/aplicaciones/ultima-actualizacion-windows-11-esta-siendo-pesadilla-para-ciertos-usuarios-estos-algunos-sus-problemas' },
    { url: 'https://i.imgur.com/Su675xc.png', link: 'https://www.xataka.com/ordenadores/titan-ahora-vende-lo-que-parece-ser-el-pc-de-sobremesa-mas-potente-del-mundo-el-unico-problema-es-su-precio' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Cambia cada 3 segundos

    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  }, [images.length]);


    // Función para redirigir al hacer clic en una imagen
    const handleImageClick = (link) => {
      window.location.href = link; // Redirige a la URL externa
    };
  

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
            style={{ backgroundImage: `url(${image.url})` }} onClick={() => handleImageClick(image.link)} // Maneja el click  
          ></div>
        ))}
      </div>
    </div>
  );
};

export default AutoSlider;
