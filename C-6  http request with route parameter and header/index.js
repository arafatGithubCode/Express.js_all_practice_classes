const express = require("express");
const app = express();
const PORT = 5000;

// Route Parameter

// app.get("/id/:id/name/:name", (req, res) => {
//   //http://localhost:5000/id/30/name/Sadney

//   //   const id = req.params.id; //30
//   //   const name = req.params.name; //sadney
//   const { id, name } = req.params;
//   res.send(`Student id is ${id}, name is ${name}`);
// });

// header

app.get("/", (req, res) => {
  const id = req.header("id");
  const name = req.header("name");
  res.send(`Your id is ${id}; Name is ${name} header by postman`);
});

app.listen(PORT, () => {
  `sever is running at http://localhost:${PORT}`;
});
