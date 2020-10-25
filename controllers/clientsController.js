const Clients = require("../models/Clients");

// CRUD
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

exports.getClients = async (req, res, next) => {
  try {
    const clientsList = await Clients.find({});
    res.json(clientsList);
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.getClient = async (req, res, next) => {
  const client = await Clients.findById(req.params.id);
  if (!client) {
    res.json({ message: "Client not found with that id" });
    next();
  }
  res.json(client);
};

exports.updateClient = async (req, res, next) => {
  try {
    const client = await Clients.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      {
        new: true,
      },
    );
    res.json(client);
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.deleteClient = async (req, res, next) => {
  try {
    await Clients.findOneAndDelete({ _id: req.params.id });
    res.json({ message: "Client deleted successfully" });
  } catch (error) {
    res.json({ message: "Client not found with that id to delete" });
    console.log(error);
    next();
  }
};
