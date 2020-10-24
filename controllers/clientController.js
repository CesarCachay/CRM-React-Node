const Clients = require("../models/Clients");

exports.createClient = async (req, res, next) => {
  const newClient = new Clients(req.body);
  try {
    await newClient.save();
    res.json({ message: "New client added to database" });
  } catch (error) {
    console.log(error);
    next();
  }
};
