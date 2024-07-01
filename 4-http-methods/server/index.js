import express from "express";

const app = express();
const PORT = 5000;

app.use(express.static("../client"));

//Base Page
app.get("/", (req, res) => {
  res.status(200).send("<h1>Base Page, ExpressJS</h1>");
});

//POST - create user
app.post("/user/create", (req, res) => {
  res.status(200).json(req.body);
});

app.listen(PORT, () => console.log(`Server is running on: http://localhost:${5000}`));
