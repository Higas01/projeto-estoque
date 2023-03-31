const registerModel = require("../models/RegisterSchema");
const { isEmail } = require("validator");

const validationRegister = async (req, res, next) => {
  const { email, password, confirmPassword } = req.body;

  const userExist = await registerModel.findOne({ email });
  if (userExist) {
    res
      .status(400)
      .json({ message: "Já existe um usuário cadastrado com este email" });
    return;
  }

  if (!isEmail(email)) {
    res.status(400).json({ message: "Digite um email válido" });
    return;
  }

  if (password.length <= 6) {
    res
      .status(400)
      .json({ message: "Senha precisa ter mais que 6 caracteres" });
    return;
  }

  if (password !== confirmPassword) {
    res
      .status(400)
      .json({ message: "O campo senha e confirmar senha precisam ser iguais" });
    return;
  }

  next();
};

module.exports = validationRegister;
