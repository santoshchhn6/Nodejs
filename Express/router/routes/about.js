const express = require("express");
const router = express.Router();

router.use("/", (req, res) => {
  res.send("This is About Page");
});

module.exports = router;
