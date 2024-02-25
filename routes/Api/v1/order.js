const express = require("express");
const router = express.Router();
const order_Controller = require("../../../controllers/orderController");

router.use("/placeorder", order_Controller.placeOrder);
router.use("/getorder", order_Controller.getOrder);

module.exports = router;
