const express = require("express");
const app = express();

app.use("/data", (req, res) => {
  //   res.status(200).json({
  //     statusCode: 200,
  //     message: "This page contained all student's data",
  //     department: "MIS",
  //   });
  res.redirect("/log-in");
});

app.use("/log-in", (req, res) => {
  res.send("I'm log in page");
});

app.use("/about", (req, res) => {
  res.statusCode = 202;
  res.sendFile(__dirname + "/views/about.html");
});

app.use("/register", (req, res) => {
  res.statusCode = 202;
  res.sendFile(__dirname + "/views/register.html");
});

app.get("/cookie", (req, res) => {
  res.cookie("name", "Arafat");
  res.cookie("id", 12122038);
  res.clearCookie("name");
  res.append("department", "MIS");
  res.end();
});

module.exports = app;
