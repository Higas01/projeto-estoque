const express = require("express");
const app = express();
const db = require("./db");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello word");
});

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

app.post("/register", validationRegister, registerUser);
app.post("/login", validationLogin, loginUser);
app.delete("/logout", deleteToken, (req, res) => {
  res.status(200).json({ message: "logout com sucesso!" });
});

app.post("/products/add", verifyToken, addItemController);
app.get("/products", verifyToken, getItemController);
app.get("/products/:id", verifyToken, getItemIDController);
app.put("/products/update/:id", verifyToken, updateItemController);
app.delete("/products/delete/:id", verifyToken, deleteItemController);

app.listen(3000, async (req, res) => {
  await db();
  console.log("rodando");
});
