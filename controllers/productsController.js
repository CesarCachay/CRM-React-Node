const Products = require("../models/Products");
const multer = require("multer");
const shortid = require("shortid");

// config to upload images by rest api using multer
const multerConfig = {
  storage: fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, __dirname + "../../uploads/");
    },
    filename: (req, file, cb) => {
      const extension = file.mimetype.split("/")[1];
      cb(null, `${shortid.generate()}.${extension}`);
    },
  }),
  fileFilter(req, file, cb) {
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
      cb(null, true);
    } else {
      cb(new Error("Formato No válido"));
    }
  },
};

// using multer config in the image parameter of the products schema
const upload = multer(multerConfig).single("image");

// upload image
exports.uploadImage = (req, res, next) => {
  upload(req, res, function (error) {
    if (error) {
      res.json({ message: error });
    }
    return next();
  });
};

// CRUD
exports.createProduct = async (req, res, next) => {
  const newProduct = new Products(req.body);
  try {
    if (req.file.filename) {
      newProduct.image = req.file.filename;
    }
    await newProduct.save();
    res.json({ message: "product added successfully" });
  } catch (error) {
    console.log(error);
    next();
  }
};
