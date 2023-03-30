const registerModel = require("../models/RegisterSchema");

const validationLogin = (req, res, next) => {
  const { email, password } = req.body;
  if (!email) {
    return res.status(400).json({ message: "Preencha o campo e-mail" });
  }

  if (!password) {
    return res.status(400).json({ message: "Preencha o campo senha" });
  }

  next();
};

module.exports = validationLogin;
