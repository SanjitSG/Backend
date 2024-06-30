import express, { query } from "express";
import { productData, userData } from "./data.js"; // extension (.js) is impt while working with node

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
  res.status(200).json({ message: "success", data: userData });
});

//return a single user
app.get("/user/:userId", (req, res) => {
  const { userId } = req.params;
  const singleUser = userData.find((user) => user.id === Number(userId));
  if (!singleUser) {
    return res
      .status(200)
      .json({ message: "success", data: `No user found with user id: ${userId}` });
  } else {
    res.status(200).json({ message: "success", data: singleUser });
  }
});

app.get("/api/products", (req, res) => {
  const newProductData = productData.map((product) => {
    const { id, title, description, image } = product;
    return { id, title, description, image };
  });
  res.status(200).json(newProductData);
});

// Params
app.get("/api/products/:productID", (req, res) => {
  const { productID } = req.params;
  const singleProduct = productData.find((product) => product.id === Number(productID));
  res.status(200).send(singleProduct);
});

// Query
app.get("/api/cart", (req, res) => {
  const { search, limit } = req.query;
  const products = [...productData];

  let sortedProducts = products.filter((product) => {
    return product.title.startsWith(search);
  });

  if (limit) {
    sortedProducts = sortedProducts.slice(0, limit);
  }
  if (sortedProducts.length < 1) {
    return res
      .status(200)
      .json({ response: "Success", message: "No products matches the conditions" });
  }

  res.status(200).json(sortedProducts);
});
app.listen(PORT, () => console.log(`server running on: http://localhost:${PORT}`));
