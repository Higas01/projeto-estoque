const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;
const invalidTokenModel = require("../models/InvalidTokenSchema");

const verifyToken = async (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    const tokenInvalid = await invalidTokenModel.findOne({ token });
    if (tokenInvalid) {
      res.status(401).json({ error: "Token inválido" });
      return;
    }
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
      if (err) return res.status(401).json({ error: "Token inválido" });

      req.id = decoded.id;
      next();
    });
  } catch (error) {
    res.status(500).json({
      error: "Ocorreu algum erro no sistema, tente novamente mais tarde",
    });
  }
};

module.exports = verifyToken;
