const express = require("express");
const router = express.Router();
const user = require("../user.json");

router.use("/", (req, res) => {
  res.json(user);
});

module.exports = router;
