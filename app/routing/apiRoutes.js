function apiRoutes(app) {
    // ---------------------------------------
    // App setup - requirments
    // ---------------------------------------
    var express = require("express");
    var bodyParser = require("body-parser");
    var path = require("path");

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.text());
    app.use(bodyParser.json({
        type: "application/vnd.api+json"
    }));

    

    var friendsMaker = require("../data/friends.js");
    var friends = new friendsMaker();

    app.get("/api/friends", function (req, res) {

        res.json(friends.showFriends());
    });

    app.post("/api/friends", function (req, res) {

        
        var newRequest = req.body;
        

        var newFriend = new friendsMaker(newRequest.name, newRequest.picture, newRequest.survey);
        newFriend.newFriend();
        console.log(newFriend.closestMatch);
        res.send(newFriend.closestMatch);
    });
}

module.exports = apiRoutes;
