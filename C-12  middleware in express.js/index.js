require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const myMiddleware = (req, res, next) => {
  req.currentTime = new Date(Date.now());
  console.log("I'm middleware function");
  next();
};

// app.get("/", myMiddleware, (req, res) => {
//   console.log("home page" + req.currentTime);
//   res.send("I'm home page" + req.currentTime);
// });

// app.get("/about", myMiddleware, (req, res) => {
//   console.log("about page" + req.currentTime);
//   res.send("I'm about page");
// });

//globally access middleware function

app.use(myMiddleware);

app.use((req, res, next) => {
  res.send("404 bad url request");
});

app.get("/", (req, res) => {
  console.log("home page");
  res.send("I'm home page");
});

app.get("/about", (req, res) => {
  console.log("about page");
  res.send("I'm about page");
});

app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
