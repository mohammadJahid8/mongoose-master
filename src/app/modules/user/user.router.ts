import express from "express";
import { saveUserController } from "./user.controller";
const router = express.Router();

router.get("/", saveUserController);

export default router;
