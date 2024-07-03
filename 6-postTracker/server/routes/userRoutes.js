import express from "express";
import { createUser, getAllUsers } from "../controllers/userController.js";

const router = express.Router();

router.post("/add", createUser);
router.get("/", getAllUsers);

export default router;
