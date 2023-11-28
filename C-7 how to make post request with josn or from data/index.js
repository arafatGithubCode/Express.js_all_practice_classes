const express = require("express");
const app = express();
const PORT = 5000;

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/user", (req, res) => {
  const name = req.body.name;
  const age = req.body.age;
  res.send(`Welcome ${name}, your are ${age}`);
});

app.listen(PORT, () => {
  `sever is running at http://localhost:${PORT}`;
});
