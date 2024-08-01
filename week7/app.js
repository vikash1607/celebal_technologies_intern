const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('./models/User');
const dotenv=require('dotenv');

const app = express();
const PORT = process.env.PORT || 3000;
const secretKey = 'xfgh45678jhgfrt678'; // Replace with your actual secret key

app.use(bodyParser.json());

// Connect to MongoDB
dotenv.config();


mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log('Connected to MongoDB!');
  })
  .catch((err) => {
    console.log(err);
  });

// Generate JWT token
const generateToken = (user) => {
    return jwt.sign({ id: user._id }, secretKey, {
      expiresIn: '1h',
    });
  };
  
  // Middleware to protect routes
  const jwtMiddleware = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    console.log('Authorization Header:', authHeader); // Debugging line
    
    if (!authHeader) {
      return res.status(403).json({ message: 'No token provided' });
    }
  
    const token = authHeader.split(' ')[1]; // Extract Bearer token
    console.log('Extracted Token:', token); // Debugging line
  
    try {
      req.user = jwt.verify(token, secretKey);
      console.log('Verified User:', req.user); // Debugging line
      next();
    } catch (err) {
      console.error('Token verification error:', err); // Debugging line
      res.status(401).json({ message: 'Unauthorized' });
    }
  };
  
  // Register route
  app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    try {
      const user = new User({ username, password });
      await user.save();
      res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
      res.status(400).json({ message: 'Error registering user', error: err.message });
    }
  });
  
  // Login route
  app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
      const user = await User.findOne({ username });
      if (user && await bcrypt.compare(password, user.password)) {
        const token = generateToken(user);
        res.json({ token });
      } else {
        res.status(401).json({ message: 'Invalid credentials' });
      }
    } catch (err) {
      res.status(500).json({ message: 'Error logging in', error: err.message });
    }
  });
  
  // Protected route example
  app.get('/protected', jwtMiddleware, (req, res) => {
    res.json({ message: 'This is a protected route', user: req.user });
  });
  
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });

