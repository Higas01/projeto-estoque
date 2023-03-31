const express = require("express");
const app = express();
const db = require("./db");
const routes = require("./routes");

app.use(express.json());
app.use(routes);

app.listen(3000, async (req, res) => {
  await db();
  console.log("rodando");
});
