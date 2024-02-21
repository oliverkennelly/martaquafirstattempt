/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const database = {
    fish: [
        {
            name: "Darling",
            food: "flake food and brine shrimp",
            size: 2,
            type: "Black skirt tetra",
            location: "Petsmart"
        }, {
            name: "Big Man",
            food: "bloodworms",
            size: 4,
            type: "Peppered corydora",
            location: "Aquatic Critters"
        },{
            name: "Po",
            food: "daphnia and brine shrimp",
            size: 2,
            type: "Panda corydora",
            location: "Seven Seas Aquatics"
        },{
            name: "Zippy",
            food: "flake food",
            size: 2,
            type: "Zebra danio",
            location: "Petsmart"
        },{
            name: "Gemini",
            food: "brine shrimp",
            size: 3,
            type: "Colombian Tetra",
            location: "Petsmart"
        },{
            name: "Shimmer",
            food: "flake food and bloodworms",
            size: 3,
            type: "Gold corydora",
            location: "Aquatic Critters"
        },{
            name: "Casper",
            food: "flake food",
            size: 1,
            type: "Pristella tetra",
            location: "Seven Seas Aquatics"
        },{
            name: "Flipper Potter",
            food: "flake food and tablets",
            size: 5,
            type: "Albino plecostomus",
            location: "Aquatic Critters"
        },{
            name: "Angel",
            food: "flake food",
            size: 3,
            type: "Black angelfish",
            location: "Aquatic Critters"
        }
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}