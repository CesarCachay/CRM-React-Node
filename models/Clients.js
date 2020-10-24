const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Trim helps you to remove spaces in the paramaeters of our client schema
const clientsSchema = new Schema({
  first_name: {
    type: String,
    trim: true,
  },
  last_name: {
    type: String,
    trim: true,
  },
  company: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
  },
  phone: {
    type: String,
    trim: true,
  },
});

module.exports = mongoose.model("Clients", clientsSchema);
