var express = require('express');
var router = express.Router();
const billOfLadingsController = require("../../controllers/billOfLadingController")
// [GET] /bill-of-lading/:id
router.use("/:id",billOfLadingsController.getBillOfLadingsByID);
// [GET] /bill-of-lading/
router.use("/",billOfLadingsController.getBillOfLadings);
module.exports = router