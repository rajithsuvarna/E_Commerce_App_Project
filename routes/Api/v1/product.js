const express = require("express");
const router = express.Router();
const product_Controller = require("../../../controllers/productController");

router.post("/create", product_Controller.create);
router.get("/getproduct/:id", product_Controller.getProduct);
router.get("/getAllproduct", product_Controller.getAllProduct);
router.post("/createCategory", product_Controller.createCategory);
router.get("/getCategory", product_Controller.getCategory);

module.exports = router;
