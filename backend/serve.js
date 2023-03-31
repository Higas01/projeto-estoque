const express = require("express");
const app = express();
const db = require("./db");
const router = require("./routes");

app.use(express.json());
app.use(router);

app.listen(3000, async (req, res) => {
  await db();
  console.log("rodando");
});
