const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const registerModel = require("../models/RegisterSchema");

const jwtSecret = "secret";

const generateToken = (id) => {
  return jwt.sign({ id }, jwtSecret, {
    expiresIn: "7d",
  });
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const emailSearch = await registerModel.findOne({ email });
    if (emailSearch === null) {
      res.status(400).json({ error: "Digite um e-mail válido" });
      return;
    }
    const match = await bcrypt.compare(password, emailSearch.password);
    if (!match) {
      res.status(400).json({ error: "Senha incorreta" });
      return;
    }

    res.status(200).json({
      message: "Autenticado com sucesso!",
      token: generateToken(emailSearch._id),
    });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Ocorreu algum erro, tente novamente mais tarde" });
  }
};

module.exports = loginUser;
