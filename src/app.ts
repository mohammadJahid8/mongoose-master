import express, { Application } from "express";
import cors from "cors";

import userRouter from "./app/modules/user/user.router";

const app: Application = express();
app.use(cors());

// parse data
app.use(express.json());
app.use(express.urlencoded());

app.use("/api/v1/user", userRouter);

app.get("/", (req, res) => {
  res.send("Hello world");
});

export default app;
