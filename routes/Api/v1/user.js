const express = require("express");
const router = express.Router();
const user_Controller = require("../../../controllers/userController");


router.post("/signup", user_Controller.create);
router.get("/login", user_Controller.login);

module.exports = router;

