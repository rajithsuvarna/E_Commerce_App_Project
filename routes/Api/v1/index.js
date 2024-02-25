const express = require("express");
const router = express.Router();

router.use("/user", require("./user"));
router.use("/order", require("./order"));
router.use("/product", require("./product"));
router.use("/tablesetup", require("./Tablesetup"));
router.use("/cart", require("./cart"));

module.exports = router;
