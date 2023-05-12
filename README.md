
### What is mongoose?
Mongoose is a Powerful Object Data Modeling (ODM) Library for Mongodb.
Mongoose is also called mongodb wrapper.

- It provides a higher level abstraction for interacting with mongodb making it easier to work with data.
- With mongoose you can define schemas, models, and relationship for your mongodb documents.
- Mongoose works with `MongoDb driver`.

### Key Features of Mongoose:
- Schema Definition
- Model Creation
- Data Validation
- Querying
- Middleware Support
- Population

### How Mongoose work with Typescript?
`Interface -> Schema -> Model -> Database Query`

### How to make a server with Express, Typescript and Mongoose from scratch?

Step 1-Create a package.json file.
~~~javascript
npm init -y
~~~

Step 2 - Install TypeScript
~~~javascript
npm install typescript --save-dev
~~~

Step 3 - Install Express Js
~~~javascript
npm install express --save
~~~

Step 4 - Install Mongoose
~~~javascript
npm install mongoose --save
~~~

Step 5 - Install ts-node-dev
~~~javascript
npm install ts-node-dev --save-dev

// add start script in package.json
"dev": "ts-node-dev --respawn --transpile-only ./src/server.ts",
~~~

Step 6 - Create a server.ts file, and write the below code 
~~~javascript
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
~~~

Step 7 - Run the following command in your terminal to start the server
~~~javascript
npm run dev
~~~
