const express = require("express");
const app = express();
const port = 3000;

const path = require("path");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(__dirname + "/../dist"));

app.get("/", (req, res) => {
    console.log('??')
  res.sendFile(path.join(__dirname, "/../dist/index.html"));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
