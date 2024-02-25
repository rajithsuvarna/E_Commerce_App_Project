const express = require("express");
const router = express.Router();
const user_Controller = require("../../../controllers/userController");

router.use("/signup", user_Controller.create);
router.use("/login", user_Controller.login);

module.exports = router;
