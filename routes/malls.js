const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

//get all malls page
router.get("/", (req, res) => {
  res.send("hioooo");
});

//get specific malls page
router.get("/:mall_name", (req, res) => {});

//create mall by admin
router.post("/newmall", (req, res) => {});

//update mall by admin
router.put("/:mall_name", (req, res) => {});

//delete mall by admin
router.delete("/:mall_name", (req, res) => {});


module.exports = router;
