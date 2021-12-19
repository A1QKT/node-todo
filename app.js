var express = require("express");
var mongoose = require("mongoose");
var config = require("./config");
var setupController = require("./controllers/setupController");
var apiController = require("./controllers/apiController");
var app = express();


var port = process.env.PORT || 3000;

app.use("/assets", express.static(__dirname + "/public"));

app.set("view engine", "ejs");

mongoose.connect(config.getDBConectionString());

setupController(app);
apiController(app);  
app.listen(port);
//"mongodb+srv://khoi:lovetoana1@cluster0.nealr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"