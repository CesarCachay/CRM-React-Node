const express = require("express");
const router = express.Router();

module.exports = function () {
  router.get("/", (req, res) => {
    res.send("landing");
  });
  router.get("/us", (req, res) => {
    res.send("this is us");
  });

  return router;
};
