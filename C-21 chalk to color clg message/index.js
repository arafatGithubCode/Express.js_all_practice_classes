const express = require("express");
const chalk = require("chalk");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.status(200).send("home");
});

const log = console.log;
log(chalk.red.bgYellow.bold.strikethrough("chalk for clg coloring"));

app.listen(PORT, () => {
  console.log(
    chalk.green.bgWhite.bold.underline(
      `Server is running at http://localhost:${PORT}`
    )
  );
});
