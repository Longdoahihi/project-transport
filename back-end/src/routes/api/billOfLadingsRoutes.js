const express = require('express');
const router = express.Router();

// [GET] /bill-of-ladings/:id
router.use("/:id",(req,res)=>{
    res.json([{
        name: "Test Single 1"
    }])
})
// [GET] /bill-of-ladings
router.use("/",(req,res)=>{
    res.json({
        name: "Test List"
    })
})

module.exports = router