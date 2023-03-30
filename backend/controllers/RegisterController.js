const bcrypt = require("bcrypt");
const registerModel = require("../models/RegisterSchema");

const registerUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const salt = 3;
    const hashPassword = await bcrypt.hash(password, salt);

    await registerModel.create({
      email,
      password: hashPassword,
    });
    res.status(201).json({ message: "Usuário criado com sucesso" });
  } catch (e) {
    res.status(500).json({
      error:
        "Desculpe, ocorreu algum erro no sistema. Tente novamente mais tarde",
    });
  }
};

module.exports = registerUser;
