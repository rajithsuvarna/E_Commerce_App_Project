const express = require("express");
const router = express.Router();
const cart_Controller = require("../../../controllers/cartController");

router.use("/create", cart_Controller.create);
router.use("/deletecart/:id", cart_Controller.deleteCart);
router.use("/updatecart/:id", cart_Controller.updateCart);
router.use("/getcart/:id", cart_Controller.getCart);

module.exports = router;
