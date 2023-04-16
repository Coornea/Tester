// console.log("Server is Running!");

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const port = 3030;

app.listen(3030, () => {
  console.log(`Listening on port ${port}`);
});

// Make sure to place body-parser before CRUD handlers!
app.use(bodyParser.urlencoded({ extended: true }));

// app.get(endpoint, callback);
// callback can be request and response
app.get("/", (req, res) => {
  //   res.send("Hello World!");
  res.sendFile(__dirname + "/index.html");
});

app.post("/quotes", (req, res) => {
  console.log("Piiiiiiiiiing!");
});
