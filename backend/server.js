// backend/server.js

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const todoRoutes = require('./routes/todos');

const app = express();
app.use(cors());
app.use(express.json());

// Remove deprecated options
mongoose.connect('mongodb://localhost/todolist', {
  // No need for useNewUrlParser and useUnifiedTopology
});

app.use('/api/todos', todoRoutes);

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
