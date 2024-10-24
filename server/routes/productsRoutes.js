
const express = require('express');
const router = express.Router();
const Product = require('../models/Products');

// Obtener todos los productos
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Crear un nuevo producto
router.post('/', async (req, res) => {
  const product = new Product({
    description: req.body.description,
    imageUrl: req.body.imageUrl,
    price: req.body.price,
  });

  try {
    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Actualizar un producto existente
router.put('/:id', async (req, res) => {
    try {
      // Encontrar el producto por ID
      const product = await Product.findById(req.params.id);
      if (!product) {
        return res.status(404).json({ message: 'Producto no encontrado' });
      }
  
      // Actualizar los campos del producto
      product.description = req.body.description || product.description;
      product.imageUrl = req.body.imageUrl || product.imageUrl;
      product.price = req.body.price || product.price;
  
      const updatedProduct = await product.save();
      res.json(updatedProduct);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });

module.exports = router;
