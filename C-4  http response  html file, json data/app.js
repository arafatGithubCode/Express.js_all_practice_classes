const express = require("express");
const app = express();
const userRouter = require("./routing/user.route");

app.use("/api/user", userRouter);

// app.use("/register", (req, res) => {
//   // res.status(200).json({
//   //   message: "Hi! I'm message page",
//   //   statusCode: 200,
//   // });
//   res.redirect("/log-in");
// });

app.use("/register", (req, res) => {
  res.statusCode = 200;
  res.sendFile(__dirname + "/views/register.html");
});

app.use("/log-in", (req, res) => {
  res.send("<h1>I am logged In</h1>");
});

app.get("/cookie", (req, res) => [
  res.cookie("name", "Arafat"),
  res.cookie("age", 21),
  res.clearCookie("name"),
  res.append("id", "12122038"),
  res.end(),
]);

app.get("/", (req, res) => {
  res.statusCode = 200;
  res.sendFile(__dirname + "/views/index.html");
});

app.use((req, res) => {
  res.send("<h1>Oops!!! 404 Not found</h1>");
});

module.exports = app;
