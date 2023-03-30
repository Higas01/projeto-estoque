const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const invalidTokenSchema = new Schema({
  token: String,
  createdAt: { type: Date, default: Date.now, expires: 604800 },
});

const invalidTokenModel = mongoose.model("invalidToken", invalidTokenSchema);

module.exports = invalidTokenModel;
