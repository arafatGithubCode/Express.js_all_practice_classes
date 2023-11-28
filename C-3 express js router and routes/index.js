const app = require("./app");
const PORT = 8000;

app.listen(PORT, () => {
  console.log(`sever is running at http://localhost:${PORT}`);
});
