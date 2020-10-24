const express = require("express");
const router = express.Router();
const clientsController = require("../controllers/clientController");

module.exports = function () {
  // clients services
  router.post("/clients", clientsController.createClient);
  router.get("/clients", clientsController.getClients);
  router.get("clients/:id", clientsController.getClient);

  // test services
  router.get("/", (req, res) => {
    res.send("landing");
  });
  router.get("/us", (req, res) => {
    res.send("this is us");
  });

  return router;
};
