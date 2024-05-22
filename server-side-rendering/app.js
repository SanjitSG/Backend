import express from "express";
import { productData, userData } from "./data.js";

const app = express();
const PORT = 5000;

//server-side-rendering
// app.use(express.static("./website"));

app.get("/", (req, res) => {
  res.status(200).send(`<h1>Home Page</h1>
  <a href="/user">User info</a>
  <a href="/products">Products</a>
  `);
});
//sending json response

app.get("/products", (req, res) => {
  res.status(200).json(productData);
});
app.get("/user", (req, res) => {
  res.status(200).json(userData);
});
app.listen(PORT, () => console.log(`server running on: http://localhost:${PORT}`));
