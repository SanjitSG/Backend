import express, { query } from "express";
import { productData, userData } from "./data.js"; // extension (.js) is impt while working with node

const app = express();
const PORT = 5000;

//server-side-rendering
// app.use(express.static("./website"));
app.use(express.json());
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

// remove a user
app.delete("/api/user/:userId", (req, res) => {
  const { userId } = req.params;
  const user = userData.find((user) => user.id === Number(userId));
  if (!user) {
    res.status(200).json({ message: "success", data: `no user with userId ${userId} found` });
  } else {
    let newUsers = userData.filter((user) => user.id !== Number(userId));
    res.status(200).json({ message: "success", data: newUsers });
  }

  res.status(200).json({ message: "success", data: newData });
});

//POST
// id, name, age, city
app.post("/api/user/create", (req, res) => {
  const { id, name, age, city } = req.body;

  if (!(id && name && age && city)) {
    return res.status(200).json({ message: "Something went wrong" });
  } else {
    return res
      .status(200)
      .json({ message: `User with id ${id} is successfully created`, data: req.body });
  }
});

//PUT - update existing content
app.put("/api/user/:userId", (req, res) => {
  const { userId } = req.params;
  console.log(userId);
  const userIndex = userData.findIndex((user) => user.id === Number(userId));
  console.log(userIndex);
  if (userIndex === -1) {
    res.status(200).json({ message: `No user found with userId: ${userId}` });
  } else {
    const updatedUser = { ...userData[userIndex], ...req.body };
    userData[userIndex] = updatedUser;
    res.status(200).json({ message: "Success", data: userData });
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
