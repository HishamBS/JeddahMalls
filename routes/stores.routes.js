const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Store = require("../models/Store");

//get specific store page
router.get("/:store_id", (req, res) => {
  Store.findById(req.params.store_id)
    .then(store => {
      res.json(store);
    })
    .catch(err => {
      res.json({ msg: "store doesn't exist", err: err });
    });
});

//delete a store
router.delete("/:store_id", (req, res) => {
  Store.findByIdAndDelete(req.params.store_id)
    .then(store => {
      res.json({ msg: "deleted successfully", store: store });
    })
    .catch(err => {
      res.json({ msg: "store doesn't exist", err: err });
    });
});

//edit a store
router.put("/:store_id", async (req, res) => {
  let updatedStore = req.body;

  Store.findByIdAndUpdate(req.params.store_id, updatedStore)
    .then(response => {
      res.json({ msg: "store edited", updatedStore: response });
    })
    .catch(err => {
      res.json({ msg: "store couldn't be found", err: err });
    });
});

module.exports = router;
