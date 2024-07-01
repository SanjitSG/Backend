const express = require("express");
const app = express();
const PORT = 5000;

//creating route
app.get("/", (req, res) => {
  res.status(200).send("<h1>Home Page</h1>");
});
app.get("/about", (req, res) => {
  res.status(200).send("<h1>About Page</h1>");
});
app.get("*", (req, res) => {
  res.status(404).send("<h1>Page Not Found</h1>");
});
//starting server
app.listen(PORT, () => console.log(`Server is running on: http://localhost:${PORT}`));
