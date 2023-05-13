import express from "express";
import { getUsers, saveUserController } from "./user.controller";
const router = express.Router();

router.get("/", getUsers);
router.post("/create-user", saveUserController);

export default router;
