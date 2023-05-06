//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.send("Hello");
});

let port = process.env.PORT;
if ((port == null) | (port == "")) {
  port = 3000;
}

app.listen(port, function () {
  console.log("Server started on port 3000.");
});
