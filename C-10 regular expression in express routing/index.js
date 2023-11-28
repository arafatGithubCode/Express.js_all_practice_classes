const express = require("express");
const app = express();
const PORT = 3000;

// "/products/:id([0-9]{3})" only 3 digits allowed between 0 to 9
// "/products/:id([0-9]+)" unlimited digit allowed between 0 to 9
app.get("/products/:id([0-9]{3})", (req, res) => {
  res.send(`<h2>ID = ${req.params.id}`);
});

//"/products/:title([a-zA-Z]{3})"
//"/products/:title([a-zA-Z]+)"
app.get("/products/:title([a-zA-Z0-9]+)", (req, res) => {
  res.send(`<h2>Title = ${req.params.title}`);
});

app.use("*", (req, res) => {
  res.status(404).send({
    message: "Not a valid route",
  });
});

app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
