// server/routes/articleRoutes.js
const express = require('express');
const { createArticle, getArticles } = require('../controllers/articleController');

const router = express.Router();

// Create Article
router.post('/', createArticle);

// Fetch Articles
router.get('/', getArticles);

module.exports = router;
