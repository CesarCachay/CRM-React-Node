const express = require("express");
const router = express.Router();
const clientsController = require("../controllers/clientsController");
const productsController = require("../controllers/productsController");

module.exports = function () {
  // clients services
  router.post("/clients", clientsController.createClient);
  router.get("/clients", clientsController.getClients);
  router.get("/clients/:id", clientsController.getClient);
  router.put("/clients/:id", clientsController.updateClient);
  router.delete("/clients/:id", clientsController.deleteClient);

  // products services
  router.post(
    "/products",
    productsController.uploadImage,
    productsController.createProduct,
  );

  return router;
};
