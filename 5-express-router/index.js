import express from "express";
import userRoutes from "./routes/userRoutes.js";
import authRoutes from "./routes/authUser.js";
const app = express();
const PORT = 5000;

//middlewares
// user
app.use("/api/v1/users", userRoutes);
// auth
app.use("/api/v1/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on: http://localhost:${PORT}`);
});
