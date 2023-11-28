const express = require("express");
const app = express();
const userRouter = require("./routing/user.route");

app.use("/api/user", userRouter);

app.get("/", (req, res) => {
  res.send("<h1>I am a get request at Home route</h1>");
});

app.use((req, res) => {
  res.send("<h1>Oops!!! 404 Not found</h1>");
});

module.exports = app;
