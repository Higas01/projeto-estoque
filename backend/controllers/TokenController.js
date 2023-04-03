const jwt = require("jsonwebtoken");
const jwtSecret = "secret";
const invalidTokenModel = require("../models/InvalidTokenSchema");

const tokenController = async (req, res) => {
  try {
    const { token } = req.body;
    const tokenInvalid = await invalidTokenModel.findOne({ token });
    if (tokenInvalid) {
      res.status(401).json({ error: "Token inválido" });
      return;
    }
    jwt.verify(token, jwtSecret, (err, decoded) => {
      if (err) return res.status(401).json({ error: "Token inválido" });

      req.id = decoded.id;
      return res.status(200).json({ message: "Token válidado" });
    });
  } catch (error) {
    res.status(500).json({
      error: "Ocorreu algum erro no sistema, tente novamente mais tarde",
    });
  }
};

module.exports = tokenController;
