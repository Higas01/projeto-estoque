const registerModel = require("../models/RegisterSchema");
const { isEmail } = require("validator");

const validationRegister = async (req, res, next) => {
  const { email, password, confirmPassword } = req.body;

  const userExist = await registerModel.findOne({ email });
  if (userExist) {
    return res
      .status(400)
      .json({ message: "Já existe um usuário cadastrado com este email" });
  }

  if (!isEmail(email)) {
    return res.status(400).json({ message: "Digite um email válido" });
  }

  if (password.length <= 6) {
    return res
      .status(400)
      .json({ message: "Senha precisa ter mais que 6 caracteres" });
  }

  if (password !== confirmPassword) {
    return res
      .status(400)
      .json({ message: "O campo senha e confirmar senha precisam ser iguais" });
  }

  next();
};

module.exports = validationRegister;
