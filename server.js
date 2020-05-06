// BASE SETUP
// =============================================================================

// call the packages we need
var express = require("express"); // call express
var app = express(); // define our app using express
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/data");
var nameSchema = new mongoose.Schema({
  name: String,
  sno: String,
  mdcf: String,
  description: String
});

var Microservice = mongoose.model("Microservice", nameSchema);

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb" }));

var port = 8080; // set our port

app.all("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

app.use(express.static("public"));
// ROUTES FOR OUR API
// =============================================================================
var router = express.Router(); // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.post("/saveData", function (req, res) {

  var saveData = new Microservice(req.body.input);
  if (saveData !== null) {
      try {
        console.log("saving data to mongodb");
        saveData.save()
          .then((response) => {
                return res.status(200).json({ success: true, data: response });
              })
              .catch((err) => {
                console.log(err);
                return res.status(200).json({ success: false });
              });
    } catch (error) {
      console.log(error);
    }
  }
});

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use("/api", router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log("Magic happens on port " + port);
