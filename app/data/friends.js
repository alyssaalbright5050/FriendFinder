var users = [
    {
            name: "Tom",
            photo: "data/images/Tom_Cruise.jpg",
            scores: [
                5,
                5,
                5,
                5,
                5
            ]
    },
    {
            name: "Angelina",
            photo: "data/images/Angelina.jpg",
            scores: [
                4,
                1,
                4,
                3,
                5
            ]
    },
    {
            name: "EddieM",
            photo: "data/images/EddieMurphy.jpg",
            scores: [
                3,
                3,
                3,
                5,
                5
            ]
    },
    {
            name: "Kirsten",
            photo: "data/images/Kirsten.jpg",
            scores: [
                5,
                4,
                5,
                5,
                2
            ]
    },
    {
            name: "Krieg",
            photo: "data/images/Krieg.jpg",
            scores: [
                5,
                4,
                3,
                2,
                1
            ]

    },
    {
            name: "Nicole",
            photo: "data/images/NicoleKidman.jpg",
            scores: [
                5,
                2,
                1,
                3,
                4
            ]
    }
        
];

var pushUser = function (x){
    users.push(x);
}

module.exports = {users:users, pushUser:pushUser};