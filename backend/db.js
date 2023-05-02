const mongoose = require("mongoose");

const db = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://darkrapcontato:FN2g1pqGqB9tBu0U@cluster0.zjuqjcp.mongodb.net/?retryWrites=true&w=majority`
    );
  } catch (e) {
    console.log(e);
  }
};

module.exports = db;
