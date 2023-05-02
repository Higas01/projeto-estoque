const mongoose = require("mongoose");
const DB_PASS = process.env.DB_PASS;
const DB_USER = process.env.DB_USER;

const db = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.zjuqjcp.mongodb.net/?retryWrites=true&w=majority`
    );
  } catch (e) {
    console.log(e);
  }
};

module.exports = db;
