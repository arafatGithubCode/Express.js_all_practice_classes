const express = require("express");
const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  //http://localhost:5000/?id=100&name=Arafat&age=%2221%22 (query parameter)

  //   const id = req.query.id;
  //   const name = req.query.name;
  //   const age = req.query.age;
  const { id, name, age } = req.query;
  res.send(
    `<h1>Student name is ${name} and id is: ${id} and Student age is ${age}</h1>`
  );
});

app.listen(PORT, () => {
  `sever is running at http://localhost:${PORT}`;
});
