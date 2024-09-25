// server/controllers/articleController.js
const db = require('../config/db');

// Create Article
const createArticle = (req, res) => {
  const { title, content, author } = req.body;
  db.query(
    'INSERT INTO articles (title, content, author) VALUES (?, ?, ?)',
    [title, content, author],
    (err, result) => {
      if (err) return res.status(500).json({ error: err });
      res.status(201).json({ message: 'Article created' });
    }
  );
};

// Fetch Articles
const getArticles = (req, res) => {
  db.query('SELECT * FROM articles', (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json(result);
  });
};

module.exports = { createArticle, getArticles };
