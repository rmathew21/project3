const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userData = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  tickerSymbols: {type: [String], required: true},
  Sector: { type: String }
});

const User = mongoose.model("User", userData);

module.exports = User;
