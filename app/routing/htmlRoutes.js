var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");

// Basic route that sends the user first to the AJAX Page
module.exports = function(app){
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
  
  //add
  app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));

  });
}