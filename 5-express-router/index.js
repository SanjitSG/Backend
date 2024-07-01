import express from "express";
import { getUser, getUsers, createUser, updateUser, deleteUser } from "./controller.js";
const app = express();
const PORT = 5000;

//routes
app.get("/api/v1/users", getUser);

app.get("/api/v1/users/:id", getUser);

app.post("/api/v1/create", createUser);

app.put("/api/v1/users/:id", updateUser);

app.delete("/api/v1/users/:id", deleteUser);

app.listen(PORT, () => {
  console.log(`Server is running on: http://localhost:${PORT}`);
});
