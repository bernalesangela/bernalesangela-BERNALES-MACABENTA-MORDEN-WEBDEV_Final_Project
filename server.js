require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connection = require('./src/db'); // Import the connection from db.js
const app = express();
const port = process.env.PORT || 5000;

// Enable CORS
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// Define a route to handle login requests
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  const query = 'SELECT EmployeeUsername FROM employee WHERE EmployeeUsername = ? AND EmployeePassword = ?';
  connection.query(query, [username, password], (err, results) => {
    if (err) {
      console.error('Error during login:', err);
      res.status(500).send('Server error');
      return;
    }
    if (results.length > 0) {
      const user = results[0];
      res.status(200).json({ username: user.EmployeeUsername, fullName: user.EmployeeUsername });
    } else {
      res.status(401).send('Invalid username or password');
    }
  });
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

// Define a route to get all events with schedule and event type details
app.get('/api/events', (req, res) => {
  const query = `
    SELECT e.EventID, e.EventTitle, s.ScheduleID, s.ScheduleStartDate, s.ScheduleEndDate, e.EventTypeID
    FROM event e
    JOIN schedule s ON e.EventID = s.EventID
    JOIN eventtype et ON e.EventTypeID = et.EventTypeID
  `;
  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching events:', err);
      res.status(500).send('Server error');
      return;
    }
    res.json(results);
  });
});

// Define a route to get all event types
app.get('/api/eventtypes', (req, res) => {
  const query = 'SELECT * FROM eventtype';
  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching event types:', err);
      res.status(500).send('Server error');
      return;
    }
    res.json(results);
  });
});

// Define a route to add a new event
app.post('/api/events', (req, res) => {
  const { EventTitle, ScheduleStartDate, ScheduleEndDate, EventTypeID } = req.body;
  const eventQuery = 'INSERT INTO event (EventTitle, EventTypeID) VALUES (?, ?)';
  connection.query(eventQuery, [EventTitle, EventTypeID], (err, eventResults) => {
    if (err) {
      console.error('Error adding event:', err);
      res.status(500).send('Server error');
      return;
    }
    const eventID = eventResults.insertId;
    const scheduleQuery = 'INSERT INTO schedule (EventID, ScheduleStartDate, ScheduleEndDate) VALUES (?, ?, ?)';
    connection.query(scheduleQuery, [eventID, ScheduleStartDate, ScheduleEndDate], (err, scheduleResults) => {
      if (err) {
        console.error('Error adding schedule:', err);
        res.status(500).send('Server error');
        return;
      }
      res.status(201).send('Event added successfully');
    });
  });
});

// Define a route to delete an event
app.delete('/api/events/:id', (req, res) => {
  const { id } = req.params;
  const deleteScheduleQuery = 'DELETE FROM schedule WHERE EventID = ?';
  const deleteEventQuery = 'DELETE FROM event WHERE EventID = ?';

  connection.query(deleteScheduleQuery, [id], (err, scheduleResults) => {
    if (err) {
      console.error('Error deleting schedule:', err);
      res.status(500).send('Server error');
      return;
    }

    connection.query(deleteEventQuery, [id], (err, eventResults) => {
      if (err) {
        console.error('Error deleting event:', err);
        res.status(500).send('Server error');
        return;
      }

      res.status(200).send('Event deleted successfully');
    });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});