const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Mall = require("../models/Mall");
const Store = require("../models/Store");

//get specific mall page
router.get("/:id", (req, res) => {
  Mall.findById(req.params.id)
    .then(mall => {
      res.json(mall);
    })
    .catch(err => {
      res.json({ msg: "mall doesn't exist", err: err });
    });
});
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
//delete a Mall
router.delete("/:mall_id", (req, res) => {
  Mall.findByIdAndDelete(req.params.mall_id)
    .then(mall => {
      res.json({ msg: "deleted successfully", mall: mall });
    })
    .catch(err => {
      res.json({ msg: "Mall doesn't exist", err: err });
    });
});
//edit a mall 
router.put("/:mall_id", (req, res) => {

  let updatedMall = req.body

  Mall.findByIdAndUpdate(req.params.mall_id,updatedMall)
    .then(response => {
      res.json({ msg: "edited successfully", mall: response });
    })
    .catch(err => {
      res.json({ msg: "Mall doesn't exist", err: err });
    });
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




module.exports = router;
