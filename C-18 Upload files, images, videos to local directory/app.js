const express = require("express");
const multer = require("multer");

const app = express();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "upload/");
  },
  filename: function (req, file, cb) {
    const imageName = Date.now() + "-" + file.originalname;
    cb(null, imageName);
  },
});

const upload = multer({ storage: storage });

app.post("/register", upload.single("image"), (req, res) => {
  res.status(200).send("file uploaded successfully");
});

//home route
// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/index.html");
// });

//route not found error
app.use((req, res, next) => {
  res.status(404).json({
    statusCode: 404,
    message: "Resource not found",
  });
});

//server error
app.use((err, erq, res, next) => {
  res.status(500).json({
    statusCode: 500,
    message: "something broken",
  });
});

module.exports = app;
