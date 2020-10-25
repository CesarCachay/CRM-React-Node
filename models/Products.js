const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productsSchema = new Schema({
  name: {
    type: String,
    trim: true,
  },
  price: {
    type: Number,
  },
  image: {
    type: String,
  },
  description: {
    type: String,
    trim: true,
  },
});

module.exports = mongoose.model("Products", productsSchema);
