const invalidTokenModel = require("../models/InvalidTokenSchema");
const jwt = require("jsonwebtoken");
const jwtSecret = "secret";

const deleteToken = (req, res, next) => {
  const token = req.headers["authorization"];
  jwt.verify(token, jwtSecret, (err, decoded) => {
    if (err) {
      res.status(401).json({ error: "Token inválido" });
      return;
    }
    invalidTokenModel.create({
      token,
    });
    req.id = decoded.id;

    next();
  });
};

module.exports = deleteToken;
