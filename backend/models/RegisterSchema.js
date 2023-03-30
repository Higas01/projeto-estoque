const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const registerSchema = new Schema({
  email: String,
  password: String,
  confirmPassword: String,
});

const registerModel = mongoose.model("Register", registerSchema);

module.exports = registerModel;
