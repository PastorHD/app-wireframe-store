import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import EmpleoyeeSection from './components/EmpleoyeeSection';
import ImageSlider from './components/ImageSlider';
import ProductCatalog from './components/ProductCatalog';
import AutoSlider from './components/AutoSlider';

function App() {

  const productData = [
    { description: 'Computadora de última gama, procesador AMD, puede ejecutar juegos de última generación...' },
    { description: 'Computadora con procesador Intel, ideal para programación y desarrollo de software...' },
    { description: 'Laptop gaming con tarjeta gráfica NVIDIA RTX, ideal para juegos de alta demanda y diseño gráfico...' },
    { description: 'Equipo de escritorio con procesador Ryzen 9, perfecta para entornos de trabajo pesado y multitarea...' },
    { description: 'Ultrabook con procesador Intel Core i7, pantalla 4K, ideal para creadores de contenido y edición de videos...' },
    { description: 'Computadora todo-en-uno con pantalla táctil de 27 pulgadas, perfecta para espacios reducidos y entretenimiento...' },
    { description: 'Laptop económica con procesador Intel Celeron, ideal para tareas básicas y navegación web...' },
    { description: 'Computadora de escritorio con procesador AMD Ryzen 5, excelente para estudiantes y tareas de oficina...' },
    { description: 'Laptop ultraligera con batería de larga duración, ideal para profesionales en movimiento...' },
    { description: 'PC gamer con refrigeración líquida y procesador Intel Core i9, diseñada para los entusiastas de los videojuegos...' },
    { description: 'Estación de trabajo con procesador Xeon, ideal para profesionales que trabajan con modelado 3D y simulaciones...' }
    // Agrega más productos simulados aquí
  ];

  const employees = [
    { name: 'John Doe', position: 'Software Engineer', timeWorked: '3 years' },
    { name: 'Jane Smith', position: 'Project Manager', timeWorked: '5 years' },
    { name: 'Emily Johnson', position: 'Designer', timeWorked: '2 years' }
  ];

  const imageData = [
    {
      url: 'https://via.placeholder.com/150',
      text: 'Hemos desarrollado un nuevo modelo',
    },
    {
      url: 'https://via.placeholder.com/150',
      text: 'Nuestro producto es líder en el mercado',
    },
    {
      url: 'https://via.placeholder.com/150',
      text: 'Innovación y tecnología de punta',
    },
    {
      url: 'https://via.placeholder.com/150',
      text: 'Diseño y funcionalidad en armonía',
    },
  ];

  return (
    <div>
      <Header />
      <Hero />
      <AutoSlider />
      <ProductCatalog products={productData} />
      <ImageSlider images={imageData} />
      <EmpleoyeeSection employees={employees} />   
      <Footer />
    </div>
  );
} 



export default App;
