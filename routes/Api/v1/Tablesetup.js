const express = require("express");
const router = express.Router();
const tableController = require("../../../controllers/TablesetupController");

router.get("/CreteTables", tableController.create);

module.exports = router;
