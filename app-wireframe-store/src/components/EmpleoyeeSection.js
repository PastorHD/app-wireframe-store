import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './EmpleoyeeSection.css';


// Obtener los testimoniales de la API
const EmpleoyeeSection = () => {
  const [testimonials, setTestimonials] = useState([]);
useEffect(() => {
  const fetchTestimonials = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/testimonials');
      setTestimonials(response.data);
    } catch (error) {
      console.error('Error al cargar testimoniales:', error);
    }
  };

  fetchTestimonials();
}, []);

  return (
    <div className="employee-section">
      {testimonials.map((testimonial) => (
        <div className="employee-card" key={testimonial._id}>
          <div className="profile-circle">
            {testimonial.imageUrl && (
              <img src={`http://localhost:5000${testimonial.imageUrl}`} alt={testimonial.name} />
            )}
          </div>
          <h3>{testimonial.name}</h3>
          <p>{testimonial.occupation}</p>
          <span>{testimonial.description}</span>
        </div>
      ))}
    </div>
  );
};

export default EmpleoyeeSection;
