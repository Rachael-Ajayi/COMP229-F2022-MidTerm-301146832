// File name: COMP229-F2022-MidTerm-301146832
// Author's Name: Rachael Ajayi
// Student ID: 301146832
// Web App Name: Favourite Car List

// modules required for routing
let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

// define the game model
let car = require("../models/cars");

/* GET home page. wildcard */
router.get("/", (req, res, next) => {
  res.render("content/index", {
    title: "Home",
    cars: "",
  });
});

module.exports = router;
