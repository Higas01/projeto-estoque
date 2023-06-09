const { Router } = require("express");
const registerUser = require("./controllers/RegisterController");
const validationRegister = require("./middlewares/ValidationRegister");
const loginUser = require("./controllers/LoginController");
const verifyToken = require("./middlewares/VerifyToken");
const {
  addItemController,
  getItemController,
  updateItemController,
  deleteItemController,
  getItemIDController,
} = require("./controllers/ItemController");
const validationLogin = require("./middlewares/ValidationLogin");
const deleteToken = require("./middlewares/DeleteToken");
const tokenController = require("./controllers/TokenController");

const router = Router();

router.post("/register", validationRegister, registerUser);
router.post("/login", validationLogin, loginUser);
router.delete("/logout", deleteToken, (req, res) => {
  res.status(200).json({ message: "logout com sucesso!" });
});

router.post("/products/add", verifyToken, addItemController);
router.get("/products", verifyToken, getItemController);
router.get("/products/:id", verifyToken, getItemIDController);
router.put("/products/update/:id", verifyToken, updateItemController);
router.delete("/products/delete/:id", verifyToken, deleteItemController);

router.post("/token", tokenController);

module.exports = router;
