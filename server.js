// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
var bodyparser = require("body-parser");
var friends = require('./app/data/friends.js');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.post("/survey", function (req, res) {
    var userData = req.body;
    console.log(userData);
    eachFriend(userData);
    friends.pushUser(userData);
    res.json(friends.users[bestMatch]);
  });
  
  var sumArray = [];
  var bestMatch;
  
  function compareUsers(userDataParameter) {
    var compareScore = friends.users[y].scores;
    var newScore = userDataParameter.scores;
    var compareArray = [];
    var total = 0
  
  
    for (i = 0; i < newScore.length; i++) {
      compareArray.push(Math.abs(compareScore[i] - newScore[i]));
      total += compareArray[i];
    }
  
    sumArray.push(total);
  
    bestMatch = sumArray.indexOf(Math.min.apply(null,sumArray));
  
    console.log(bestMatch);
    
    console.log('sumArray == ' + sumArray);
  
  }
  
  function eachFriend(userDataParameter){
    sumArray = [];
    for (y = 0; y < friends.users.length; y++){
      compareUsers(userDataParameter);
    }
  }
  
  // Starts the server to begin listening
  // =============================================================
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
  
  require("./routing/apiRoutes.js")(app);
  require("./routing/htmlRoutes.js")(app);
  