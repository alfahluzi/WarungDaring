const express = require("express");
const app = express();
const { getDbResult } = require("../helper/db_helper");
const router = express.Router();
const bcrypt = require("bcrypt");
module.exports = router;

app.get("/keranjang", (req, res) => {
  res.render("keranjangPage", {});
});
