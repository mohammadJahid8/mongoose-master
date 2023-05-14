import express from "express";
import { getUserById, getUsers, saveUserController } from "./user.controller";
const router = express.Router();

router.get("/", getUsers);
router.post("/create-user", saveUserController);
router.get("/:id", getUserById);

export default router;
