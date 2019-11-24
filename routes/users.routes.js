const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
process.env.SECRET_KEY = "secret";

//registration

router.post("/register", (req, res) => {
  const newUser = { ...req.body };
  User.findOne({ email: newUser.email })
    .then(user => {
      if (!user) {
        bcrypt.hash(newUser.password, 10, (err, hash) => {
          newUser.password = hash;
          User.create(newUser)
            .then(user =>
              res.json(`user ${newUser.email} created successfully`)
            )
            .catch(err => res.send(err));
        });
      } else {
        res.send("email exists , please use a different email ");
      }
    })
    .catch(err => res.send(err));
});

//login
router.post("/login", (req, res) => {
  User.findOne({ email: req.body.email })
    .then(user => {
      if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          user.password = "";
          let payload = { user };
          let token = jwt.sign(payload, process.env.SECRET_KEY, {
            expiresIn: "24h"
          });
          res.send(token);
        } else {
          res.send("password is not correct");
        }
      } else {
        res.send("email not found");
      }
    })
    .catch(err => res.send(err));
});
//get user
//get user will be from the frontend
router.get("/profile", (req, res) => {
  let decoded = jwt.verify(req.body.token, process.env.SECRET_KEY);
  User.findById(decoded.user._id)
    .then(user => {
      user ? res.json(decoded.user) : res.send("token is not correct");
    })
    .catch(err => res.send(err));
});

module.exports = router;
