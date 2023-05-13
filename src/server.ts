import mongoose from "mongoose";
import app from "./app";

const port: number = 5000;

// db connection
async function main() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/mongoose-master");
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
