const app = require("./app");
const PORT = 5000;

app.get("/", (req, res) => {
  res.send("<h1>I am Home page</h1>");
});

app.use((req, res) => {
  res.send("<h1>Opps!!! 404 not found</h1>");
});

app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
