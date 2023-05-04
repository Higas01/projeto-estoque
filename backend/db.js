const mongoose = require("mongoose");
require("dotenv").config();

const db = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.zjuqjcp.mongodb.net/?retryWrites=true&w=majority`
    );
  } catch (e) {
    console.log(e);
  }
};

module.exports = db;
