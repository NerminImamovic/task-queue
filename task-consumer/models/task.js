const mongoose = require('mongoose');

// Define our User schema
const Task = new mongoose.Schema({
  id: String,
  status: String,
  query: Number,
});

// Export the Mongoose model
module.exports = mongoose.model('Task', Task);
