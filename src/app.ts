import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import { Schema, model } from "mongoose";
import userrouter from "./app/modules/user/user.router";

const app: Application = express();
app.use(cors());

// parse data
app.use(express.json());
app.use(express.urlencoded());

app.use("/", userrouter);

// app.get("/", (req: Request, res: Response, next: NextFunction) => {
//   // inserting a test data to mongodb
//   /*
//     step-1 interface -d
//     step-2 Schema -d
//     step-3 Model -d
//     step-4 Database query -d
//   */
//   // async function saveUser() {
//   // }
//   // saveUser();
//   // await user.save();
// });

export default app;
