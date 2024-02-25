const express = require("express");
const router = express.Router();
const product_Controller = require("../../../controllers/productController");

router.use("/create", product_Controller.create);
router.use("/getproduct/:id", product_Controller.getProduct);
router.use("/updateproduct/:id", product_Controller.updateProduct);

module.exports = router;
