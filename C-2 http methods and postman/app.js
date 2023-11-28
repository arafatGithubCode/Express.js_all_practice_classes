const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("I'm a get request at home route");
});

app.post("/", (req, res) => {
  res.send("I'm a post request at home route");
});
app.delete("/", (req, res) => {
  res.send("I'm a delete request at home route");
});
app.put("/", (req, res) => {
  res.send("I'm a put request at home route");
});
app.patch("/", (req, res) => {
  res.send("I'm a patch request at home route");
});
app.head("/", (req, res) => {
  res.send("I'm a head request at home route");
});
app.options("/", (req, res) => {
  res.send("I'm a options request at home route");
});
module.exports = app;
