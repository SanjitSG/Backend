import express from "express";

const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  res.status(200).send("<h1>Welcome to Post Tracker</h1>");
});

app.listen(PORT, () => console.log(`Server is running in: http://localhost:${PORT}`));
