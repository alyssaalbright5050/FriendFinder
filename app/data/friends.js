var friendsArray = [
    {
            name: Tom,
            photo: data/images/Tom_Cruise.jpg,
            scores: [
                5,
                5,
                5,
                5,
                5
            ]
    },
    {
            name: Angelina,
            photo: data/images/Angelina.jpg,
            scores: [
                4,
                1,
                4,
                3,
                5
            ]
    },
    {
            name: EddieM,
            photo: data/images/EddieMurphy.jpg,
            scores: [
                3,
                3,
                3,
                5,
                5
            ]
    },
    {
            name: Kirsten,
            photo: data/images/Kirsten.jpg,
            scores: [
                5,
                4,
                5,
                5,
                2
            ]
    },
    {
            name: Krieg,
            photo: data/images/Krieg.jpg,
            scores: [
                5,
                4,
                3,
                2,
                1
            ]

    },
    {
            name: Nicole,
            photo: data/images/NicoleKidman.jpg,
            scores: [
                5,
                2,
                1,
                3,
                4
            ]
    }
        
];

function friendConstructor(name, picture, survey) {
    //Holds json info
    this.friendObj = {
        "name": name,
        "photo": picture,
        "scores": survey
    }

    //pushes to friends array
    this.newFriend = function () {
        friends.push(this.friendObj);
        this.findMatch();
    }

    //will hold match
    this.closestMatch;

    //used for api get function to display all friends
    this.showFriends = function () {
        return friends;
    }

    //loops and finds match
    this.findMatch = function () {
        var currentBestMatch;
        var currentBestMatchScore = -1;

        for (var i in friends) {
            //dont match yourself
            if (friends[i] != this.friendObj) {
                var newFriendBestMatch = calcFriendDifference(friends[i].scores, this.friendObj.scores);

                if (currentBestMatchScore >= 0) {
                    if (newFriendBestMatch < currentBestMatchScore) {
                        currentBestMatch = friends[i];
                        currentBestMatchScore = newFriendBestMatch;
                    }
                }
                //drops first person in array to have baseline to compare
                else {
                    currentBestMatch = friends[i];
                    currentBestMatchScore = newFriendBestMatch;
                }
            }
        }
        this.closestMatch = currentBestMatch;
    }
}

module.exports = friendConstructor;

calcFriendDifference = function (arr1, arr2) {
    totalDifference = 0;
    for (var i in arr1) {
        totalDifference += Math.abs(arr1[i] - arr2[i]);
    }
    return totalDifference;
}