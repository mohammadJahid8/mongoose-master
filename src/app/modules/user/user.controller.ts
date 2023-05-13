import { Request, Response } from "express";
import User from "./user.model";

export const saveUserController = async (req: Request, res: Response) => {
  const user = new User({
    id: "5",
    role: "student",
    password: "password",
    name: {
      firstName: "Md",
      // middleName: "",
      lastName: "Jahid",
    },
    dateOfBirth: "8/8/2002",
    gender: "male",
    email: "mohmmadjahid0007@gmail.com",
    contactNo: "01633909408",
    address: "ctg",
  });

  const result = await user.save();
  console.log(result);

  res.status(200).json({
    message: "Saved",
    result: result,
  });
};
