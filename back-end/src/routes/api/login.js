const express = require('express');
const router = express.Router();

// [GET] /login
router.post("/",(req,res)=>{
    console.log("userInfo: ",req.body)
    res.json({
        name: req?.body?.email??""
    })
})

module.exports = router