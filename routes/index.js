const express = require('express');
const router = express.Router();

// Helper to render views
const render = (res, view, title, currentPage) => {
    const html = require(`../views/${view}`)(title, currentPage);
    res.send(html);
};

// Routes
router.get('/', (req, res) => render(res, 'index', 'IncogDev - Modern Website Builder', 'index'));
router.get('/work', (req, res) => render(res, 'work', 'Our Work - IncogDev', 'work'));
router.get('/services', (req, res) => render(res, 'services', 'Services - IncogDev', 'services'));
router.get('/contact', (req, res) => render(res, 'contact', 'Contact - IncogDev', 'contact'));

module.exports = router;