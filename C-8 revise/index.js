const express = require("express");
const app = express();
const PORT = 5000;

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/register", (req, res) => {
  res.sendFile(__dirname + "/register.html");
});

app.post("/register", (req, res) => {
  const fullName = req.body.fullName;
  const email = req.body.email;
  const age = req.body.age;
  res.send(
    `<h2>Your full name is ${fullName}. <br/> Your email is ${email}. <br/> Your age is ${age}`
  );
});

app.listen(PORT, () => {
  `sever is running at http://localhost:${PORT}`;
});
