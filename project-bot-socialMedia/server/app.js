const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { MONGO_URI } = require('./config');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/analytics', require('./routes/analytics'));
app.use('/api/interaction', require('./routes/interaction'));
app.use('/api/posting', require('./routes/posting'));
app.use('/api/trend', require('./routes/trend'));

// Connect to MongoDB
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
