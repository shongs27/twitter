const express = require("express");

const router = express.Router();

router.delete("/", (req, res) => {
  res.json({ id: 1 });
});

module.exports = router;
