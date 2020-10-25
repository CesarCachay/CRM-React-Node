const express = require("express");
const routes = require("./routes");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// Connect mongo
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/restapi", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

// Creating the server
const app = express();
const PORT = 5000;

// Enable body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes of the API
app.use("/", routes());

// Port
app.listen(PORT);
console.log(`Server running on port ${PORT}`);
