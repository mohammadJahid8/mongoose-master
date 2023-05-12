import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
const port = 5000;

app.use(cors());

// db connection
async function main() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
    console.log("Mongodb connected");
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (err) {
    console.log(`Failed to connect db`, err);
  }

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

main();

app.get("/", (req, res) => {
  res.send("Hello world");
});
