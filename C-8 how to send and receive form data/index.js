const express = require("express");
const app = express();
const PORT = 3000;

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/register", (req, res) => {
  res.sendFile(__dirname + "/register.html");
});

app.post("/register", (req, res) => {
  const fullName = req.body.fullName;
  const age = req.body.age;
  res.send(`<h2>your name is ${fullName} and age is ${age}</h2>`);
});

app.listen(PORT, () => {
  `sever is running at http://localhost:${PORT}`;
});
