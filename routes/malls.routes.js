const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Mall = require("../models/Mall");
const Store = require("../models/Store");

//get all malls page
router.get("/", async (req, res) => {
  try {
    let allMalls = await Mall.find();
    res.json(allMalls);
  } catch (error) {
    console.log(error);
  }
});

//get all stores inside a chosen mall
router.get("/:id/stores/", async (req, res) => {
  try {
    let chosenMall = await Mall.findById(req.params.id).populate("mall_stores");
    res.json(chosenMall.mall_stores);
  } catch (error) {
    console.log(error);
  }
});

//get specific malls page
router.get("/:_id", (req, res) => {});

//create mall by admin
router.post("/newmall", async (req, res) => {
  try {
    let mall = new Mall(req.body);
    let savedMall = await mall.save();
    res.json({ msg: "added", mall: savedMall });
  } catch (error) {
    console.log(error);
  }
});

//add a store inside the mall
router.put("/:id/stores/newstore", async (req, res) => {
  console.log(req.body);
  Mall.findById(req.params.id).then(mall => {
    let store = new Store(req.body);
    mall.mall_stores.push(store._id);
    store.save();
    mall.save().then(check => {
      res.send({ mall, store, check });
    });
  });
});

//delete mall by admin
router.delete("/:_id", (req, res) => {});

module.exports = router;
