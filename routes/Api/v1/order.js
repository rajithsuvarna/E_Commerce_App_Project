const express = require("express");
const router = express.Router();
const order_Controller = require("../../../controllers/orderController");

router.post("/placeorder", order_Controller.placeOrder);
router.get("/getorder", order_Controller.getOrder);

module.exports = router;
