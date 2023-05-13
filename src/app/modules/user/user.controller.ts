import { Request, Response } from "express";

import { createUserToDb, getUsersFromDb } from "./user.service";

export const saveUserController = async (req: Request, res: Response) => {
  try {
    const userData = req.body;
    const result = await createUserToDb(userData);

    res.status(200).json({
      message: "Saved",
      result: result,
    });
  } catch (err) {
    res.status(500).json({
      message: "Something went wrong!",
      error: err.message,
    });
  }
};
export const getUsers = async (req: Request, res: Response) => {
  try {
    const result = await getUsersFromDb();

    res.status(200).json({
      message: "got all users",
      result: result,
    });
  } catch (err) {
    res.status(500).json({
      message: "Something went wrong!",
      error: err.message,
    });
  }
};
