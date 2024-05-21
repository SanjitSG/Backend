import express from "express";

const app = express();
const PORT = 5000;

//server-side-rendering
app.use(express.static("./website"));

app.listen(PORT, () => console.log(`server running on: http://localhost:${PORT}`));
