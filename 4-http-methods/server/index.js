import express from "express";

const app = express();
const PORT = 5000;

app.use(express.static("../client"));
// Route login goes here

// 1. Base Page
app.get("/", (req, res) => {
  res.status(200).send("<h1>Base Page, ExpressJS</h1>");
});

// 2. POST - create user
app.post("/user/create", (req, res) => {
  res.status(201).json({ success: true, message: "User Added successfully" });
});

app.listen(PORT, () => console.log(`Server is running on: http://localhost:${5000}`));
