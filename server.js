require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// Enable CORS
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// Create a connection to the database
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the MariaDB database.');
});

// Define a route to get all products with category names
app.get('/api/products', (req, res) => {
  const query = `
    SELECT p.ProductID, p.ProductName, p.Price, c.CategoryName, c.CategoryID
    FROM products p
    JOIN category c ON p.CategoryID = c.CategoryID
  `;
  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching products:', err);
      res.status(500).send('Server error');
      return;
    }
    res.json(results);
  });
});

// Define a route to add a new product
app.post('/api/products', (req, res) => {
  const { name, category, price } = req.body;
  const query = 'INSERT INTO products (ProductName, CategoryID, Price) VALUES (?, ?, ?)';
  connection.query(query, [name, category, price], (err, results) => {
    if (err) {
      console.error('Error adding product:', err);
      res.status(500).send('Server error');
      return;
    }
    res.status(201).send('Product added successfully');
  });
});

// Define a route to update a product
app.put('/api/products/:id', (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;
  const query = 'UPDATE products SET ProductName = ?, Price = ? WHERE ProductID = ?';
  connection.query(query, [name, price, id], (err, results) => {
    if (err) {
      console.error('Error updating product:', err);
      res.status(500).send('Server error');
      return;
    }
    res.status(200).send('Product updated successfully');
  });
});

// Define a route to delete a product
app.delete('/api/products/:id', (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM products WHERE ProductID = ?';
  connection.query(query, [id], (err, results) => {
    if (err) {
      console.error('Error deleting product:', err);
      res.status(500).send('Server error');
      return;
    }
    res.status(200).send('Product deleted successfully');
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});