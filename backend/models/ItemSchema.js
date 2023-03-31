const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const ItemSchema = new Schema({
  product: String,
  value: Number,
  validateProduct: String,
  size: String,
  qntd: Number,
  createdAt: { type: Date, default: Date.now },
  userId: mongoose.ObjectId,
});

const itemModel = mongoose.model("products", ItemSchema);

module.exports = itemModel;
