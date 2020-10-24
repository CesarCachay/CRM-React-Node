const express = require("express");
const router = express.Router();
const clientsController = require("../controllers/clientController");

module.exports = function () {
  router.post("/clients", clientsController.createClient);
  router.get("/", (req, res) => {
    res.send("landing");
  });
  router.get("/us", (req, res) => {
    res.send("this is us");
  });

  return router;
};
