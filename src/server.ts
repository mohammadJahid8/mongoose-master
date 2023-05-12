const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 5000;

// db connection
async function main() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
    console.log("Mongodb connected");
  } catch (err) {
    console.log(`Failed to connect db`, err);
  }

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

main();

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
