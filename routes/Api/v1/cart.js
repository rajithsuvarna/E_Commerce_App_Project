const express = require("express");
const router = express.Router();
const cart_Controller = require("../../../controllers/cartController");

router.post("/create", cart_Controller.create);
router.delete("/deletecart/:id", cart_Controller.deleteCart);
router.get("/getcart/:id", cart_Controller.getCart);

module.exports = router;
