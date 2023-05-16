const express = require('express');
const billOfLadingController = require('../../controllers/billOfLadingController');
const router = express.Router();

// [POST] /bill-of-ladings
router.post("/",(req,res)=>{
    billOfLadingController.createBillOfLadings(req,res)  
})

module.exports = router