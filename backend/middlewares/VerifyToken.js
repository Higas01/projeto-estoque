const jwt = require("jsonwebtoken");
const jwtSecret = "secret";
const invalidTokenModel = require("../models/InvalidTokenSchema");

const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers["authorization"];
    const tokenInvalid = await invalidTokenModel.findOne({ token });
    if (tokenInvalid) {
      res.status(401).json({ error: "Token inválido" });
      return;
    }
    jwt.verify(token, jwtSecret, (err, decoded) => {
      if (err) return res.status(401).json({ error: "Token inválido" });

      req.id = decoded.id;
      next();
    });
  } catch (error) {
    res.status(500).jso({
      error: "Ocorreu algnum erro no sistema, tente novamente mais tarde",
    });
  }
};

module.exports = verifyToken;
