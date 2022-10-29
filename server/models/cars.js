// File name: COMP229-F2022-MidTerm-301146832
// Author's Name: Rachael Ajayi
// Student ID: 301146832
// Web App Name: Favourite Car List

let mongoose = require("mongoose");

// create a model class
let Car = mongoose.Schema(
  {
    Carname: String,
    Category: String,
    Carmodel: String,
    Price: Number,
  },
  {
    collection: "cars",
  }
);

module.exports = mongoose.model("Car", Car);
