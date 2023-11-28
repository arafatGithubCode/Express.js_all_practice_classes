const express = require("express");
const router = express.Router();

router.get("/register", (req, res) => {
  res.send("<h1>I am a get request at Register route</h1>");
});

router.get("/log-in", (req, res) => {
  res.send("<h1>I am a get request at Log in route</h1>");
});

module.exports = router;
