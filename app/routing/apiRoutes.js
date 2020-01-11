var userdata = require("../app/data/friends");

module.exports = function(app){  //added app parameter

app.get("/api/friends", function (req, res) {
    res.json(userdata);  //enter parameter This has to connect to the variable object
});


app.post("/api/friends", function (req, res) {
    res.json();
});
}


    

   