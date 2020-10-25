const Products = require("../models/Products");

exports.createProduct = async (req, res, next) => {
  const newProduct = new Products(req.body);

  try {
    await newProduct.save();
    res.json({ message: "product added successfully" });
  } catch (error) {
    console.log(error);
    next();
  }
};
