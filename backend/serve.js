const express = require("express");
const app = express();
const db = require("./db");
const router = require("./routes");
const cors = require("cors");

app.use(express.json());
app.use(cors({ methods: "*" }));
app.use(router);

app.listen(3000, async (req, res) => {
  await db();
  console.log("rodando");
});
