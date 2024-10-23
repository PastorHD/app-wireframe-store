import React, { useState } from 'react';
import './ProductCatalog.css';

const ProductCatalog = ({ products }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;

  // Calcular el índice de los productos que se mostrarán en la página actual
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Función para cambiar de página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="product-catalog-container">
      <div className="product-grid">
        {currentProducts.map((product, index) => (
          <div className="product-card" key={index}>
            <div className="product-image"></div>
            <p className="product-description">{product.description}</p>
            <div className="product-actions">
              <div className="action-button"></div>
              <div className="action-button"></div>
              <div className="action-button"></div>
            </div>
          </div>
        ))}
      </div>
      {products.length > productsPerPage && (
        <div className="pagination">
          {Array.from({ length: Math.ceil(products.length / productsPerPage) }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => paginate(index + 1)}
              className={currentPage === index + 1 ? 'active' : ''}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductCatalog;
