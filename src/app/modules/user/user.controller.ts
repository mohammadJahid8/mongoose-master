import { Request, Response } from "express";

import {
  createUserToDb,
  getAdminUserFromDb,
  getUserByIdFromDb,
  getUsersFromDb,
} from "./user.service";

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

export const getUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const getUser = await getUserByIdFromDb(id);

  res.status(200).json({
    message: "succes",
    data: getUser,
  });
};
export const getAdminUsers = async (req: Request, res: Response) => {
  const getAdmins = await getAdminUserFromDb();

  console.log(getAdmins);

  res.status(200).json({
    message: "succes",
    data: getAdmins,
  });
};
