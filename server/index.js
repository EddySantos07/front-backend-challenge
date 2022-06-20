const express = require("express");
const app = express();
const port = 3000;

const path = require("path");
const bodyParser = require("body-parser");

var mongoose = require("mongoose");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(__dirname + "/../dist"));

app.get("/", (req, res) => {
  console.log("??");
  res.sendFile(path.join(__dirname, "/../dist/index.html"));
});

app.post("/saveBreweryData", () => {
  // save data post to db -

  
});


//Set up default mongoose connection
var mongoDB = "mongodb://127.0.0.1/RSMchallenge";

mongoose.connection.on("open", function (ref) {
  console.log("Connected to mongo server.");
});

mongoose.connection.on("error", function (err) {
  console.log("Could not connect to mongo server!");
  return console.log(err);
});

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
