//login, register // profile
import express from "express";
import { userLogin, userCreate, userProfile } from "../controllers/authController.js";
const router = express.Router();

router.post("/login", userLogin);

router.post("/create", userCreate);

router.get("/profile", userProfile);

export default router;
