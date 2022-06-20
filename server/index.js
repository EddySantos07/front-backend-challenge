const express = require("express");
const app = express();
const port = 3000;

const path = require("path");
const bodyParser = require("body-parser");

var mongoose = require("mongoose");
const { BreweryModel } = require("./Models/BreweryData");

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

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(__dirname + "/../dist"));

app.get("/", (req, res) => {
  console.log("??");
  res.sendFile(path.join(__dirname, "/../dist/index.html"));
});

app.post("/saveBreweryData", async (req, res) => {
  // save data post to db -

  let Breweries = req.body.Breweries;

  let bulk = BreweryModel.collection.bulkWrite(
    Breweries.map((doc) => ({
      updateOne: {
        filter: { id: doc.id },
        update: { $set: doc },
        upsert: true,
      },
    }))
  );

  bulk
    .then((results) => res.sendStatus(200))
    .catch((err) => {
      res.sendStatus(500);
    });
});

app.get("/getBreweryData", async (req, res) => {
  // get data from db -

  let result = await BreweryModel.find();

  res.send(result);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
