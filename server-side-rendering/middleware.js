import express from "express";

const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  res.status(200).send("<h1>Middleware..</h1>");
});

app.listen(PORT, () => console.log(`Server is running on: http://localhost:${PORT}`));
