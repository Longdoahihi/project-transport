const express = require('express');
const warehouseController = require('../../controllers/warehouseController');
const router = express.Router();
// [PUT] warehouse
router.post("/",(req,res)=>{
    warehouseController.createWarehouse(req,res);
})

module.exports = router