const express = require("express");
const { body, validationResult } = require("express-validator");
const userRouter = require("./routes/user.route");
const app = express();

const PORT = 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", userRouter);

app.get("/", (req, res) => {
  res.status(200).send("I'm home");
});

app.listen(PORT, (req, res) => {
  console.log(`server is running at http://localhost:${PORT}`);
});
