const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(morgan("dev"));

app.get("/users", (req, res) => {
  res.status(200).send("List of users");
});
app.post("/users", (req, res) => {
  res.status(201).send("user is created");
});

app.get("/", (req, res) => {
  res.status(200).send("Hi");
});

// Route not found error
app.use((req, res, next) => {
  res.status(404).json({
    statusCode: 404,
    message: "Resource not found",
  });
});

// Server error
app.use((err, req, res, next) => {
  res.status(500).json({
    statusCode: 500,
    message: "Something broke",
  });
});

module.exports = app;
