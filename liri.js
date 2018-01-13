//NPM pulls
require("dotenv").config();
var keys = require("./keys.js");
var twitter = require('twitter');
var spotify = require('node-spotify-api');
var request = require("request");
var fs = require("fs");
var inquirer = require("inquirer");

var spotClient = new Spotify(keys.spotify);
var twitClient = new Twitter(keys.twitter);

inquirer.prompt([

    {
        type: "list",
        name: "startChoice",
        message: "What do you want to check today?",
        choices: ["my-tweets", "spotify-this-song", "movie-this", "do-what-it-says"]
    
    }
]);