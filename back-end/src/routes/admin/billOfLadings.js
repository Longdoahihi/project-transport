var express = require('express');
var router = express.Router();
const billOfLadingsController = require("@src/controllers/billOfLadingController")
// [GET] /bill-of-lading/:id
router.use("/:id",billOfLadingsController.detail);
// [GET] /bill-of-lading/
router.use("/",billOfLadingsController.index);
module.exports = router