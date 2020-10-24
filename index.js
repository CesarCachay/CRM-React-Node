const express = require("express");
const routes = require("./routes");
const mongoose = require("mongoose");

// Connect mongo
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/restapi", {
  useNewUrlParser: true,
});

// Creating the server
const app = express();
const PORT = 5000;

// Routes of the API
app.use("/", routes());

// Port
app.listen(PORT);
console.log(`Server running on port ${PORT}`);
