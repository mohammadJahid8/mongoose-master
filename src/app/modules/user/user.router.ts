import express from "express";
import {
  getAdminUsers,
  getUserById,
  getUsers,
  saveUserController,
} from "./user.controller";
const router = express.Router();

router.get("/", getUsers);
router.get("/getbyid/:id", getUserById);
router.get("/admins", getAdminUsers);
router.post("/create-user", saveUserController);

export default router;
