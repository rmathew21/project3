const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userData = new Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    tickerSymbols:{type: String},
    Sector: {type: String}
});

const UserData = mongoose.model("userData", userDataSchema);

modules.export = UserData;