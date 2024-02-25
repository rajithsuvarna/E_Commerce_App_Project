const express = require("express");
const router = express.Router();
const product_Controller = require("../../../controllers/productController");

router.post("/create", product_Controller.create);
router.get("/getproduct/:id", product_Controller.getProduct);
router.post("/updateproduct/:id", product_Controller.updateProduct);
router.post("/createCategory", product_Controller.create);
router.get("/getCategory", product_Controller.create);

module.exports = router;
