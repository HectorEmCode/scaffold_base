const express = require('express');
const router = express.Router();
const db = require('../db');

// Health Check Endpoint
router.get('/health', (req, res) => {
  const dbStatus = db.getDbStatus();
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    version: '1.0.0',
    platform: 'Hamburger Rapid Commercial Platform',
    database: dbStatus
  });
});

// List all burgers
router.get('/products', async (req, res) => {
  try {
    const products = await db.getProducts();
    res.json({
      success: true,
      count: products.length,
      data: products
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Get single burger
router.get('/products/:id', async (req, res) => {
  try {
    const product = await db.getProductById(req.params.id);
    if (!product) {
      return res.status(404).json({ success: false, error: 'Hamburguesa no encontrada' });
    }
    res.json({ success: true, data: product });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Add new burger
router.post('/products', async (req, res) => {
  try {
    const { name, category, price, stock, specialty_level, badge_color, rating, prep_time, calories, image, description, ingredients } = req.body;
    if (!name || price === undefined) {
      return res.status(400).json({ success: false, error: 'Nombre y precio son requeridos.' });
    }
    const product = await db.addProduct({ name, category, price, stock, specialty_level, badge_color, rating, prep_time, calories, image, description, ingredients });
    res.status(201).json({ success: true, message: 'Hamburguesa agregada exitosamente', data: product });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Update stock
router.patch('/products/:id/stock', async (req, res) => {
  try {
    const { stock } = req.body;
    const updated = await db.updateProductStock(req.params.id, parseInt(stock, 10));
    res.json({ success: true, data: updated });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Delete burger
router.delete('/products/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await db.deleteProduct(id);
    res.json({ success: true, message: `Hamburguesa ${id} eliminada del menú.` });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Customers list
router.get('/customers', async (req, res) => {
  try {
    const customers = await db.getCustomers();
    res.json({ success: true, count: customers.length, data: customers });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Customer analytics by consumption
router.get('/analytics/customers', async (req, res) => {
  try {
    const analytics = await db.getCustomerAnalytics();
    res.json({ success: true, data: analytics });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Orders list
router.get('/orders', async (req, res) => {
  try {
    const orders = await db.getOrders();
    res.json({ success: true, count: orders.length, data: orders });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Create order (Simular compra en PWA)
router.post('/orders', async (req, res) => {
  try {
    const { customerName, items, total, deliveryType, address } = req.body;
    if (!items || items.length === 0) {
      return res.status(400).json({ success: false, error: 'La orden debe contener al menos un producto.' });
    }
    const order = await db.addOrder({ customerName, items, total, deliveryType, address });
    res.status(201).json({ success: true, message: '¡Orden recibida y enviada a la parrilla!', data: order });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Reset initial products & orders
router.post('/reset', async (req, res) => {
  try {
    await db.resetProducts();
    res.json({ success: true, message: 'Menú de Hamburger Rapid restablecido con éxito.' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
