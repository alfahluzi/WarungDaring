const express = require("express");
const app = express();
const { getDbResult } = require("../helper/db_helper");
const router = express.Router();
const bcrypt = require("bcrypt");
module.exports = router;
app.get("/detail-barang", (req, res) => {
  res.render("detailPage", {});
});
