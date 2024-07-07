const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to log request details
app.use((req, res, next) => {
  console.log(`${req.method} request for '${req.url}'`);
  next();
});

// Define a route for the home page
app.get('/', (req, res) => {
  res.send('Welcome to the Home Page!');
});

// Define a route for the about page
app.get('/about', (req, res) => {
  res.send('This is the About Page.');
});

// Handle 404 errors
app.use((req, res, next) => {
  res.status(404).send("Sorry, that route doesn't exist.");
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
