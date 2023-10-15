// Imports
require("dotenv").config();
const express = require("express");
const cors = require("cors");

// Routers
const apiRouter = require("./routes/api");

const app = express();
// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

app.set("trust proxy");

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

// Config Routers
app.use("/api", apiRouter);

// listen for requests :)
var listener = app.listen(3000, function () {
  console.log(
    "Request Header Parser Microservice is listening on port " +
      listener.address().port
  );
});
