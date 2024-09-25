// server/config/db.js
const mysql = require('mysql2');

// MySQL Connection
const db = mysql.createConnection({
  host: 'localhost',              // Your database host
  user: 'w1_80679_Swapanali',     // Your database username
  password: '12345',              // Your database password
  database: 'blogging_website'    // Your database name
});

db.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL');
  }
});

module.exports = db;
