const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");


//get all stors page
router.get('/',(req,res)=>{
res.send('hi')

})

//get specific stoe page
router.get('/:store_name',(req,res)=>{


})

//create store by admin
router.post('/newstore',(req,res)=>{

})

//update store by admin
router.put('/:store_name',(req,res)=>{


})

//delete store by admin
router.delete('/:store_name',(req,res)=>{


})


module.exports = router;
