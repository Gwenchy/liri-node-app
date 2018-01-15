//NPM pulls
require("dotenv").config();
var keys = require("./keys.js");
// var twitter = require('twitter');
var spotify = require('node-spotify-api');
var request = require("request");
var fs = require("fs");
var inquirer = require("inquirer");

// var spotClient = new Spotify(keys.spotify);
// var twitClient = new Twitter(keys.twitter);

//console.clear... I learned this from another github user named "ihatetoast"... great idea. less clutter
console.clear()
//Showing the options for the user.
inquirer.prompt([
    {
        type: "list",
        name: "startChoice",
        message: "What do you want to check today?",
        choices: ["my-tweets", "spotify-this-song", "movie-this", "do-what-it-says"]
    }
]).then(function(choice) {
    if (choice.startChoice === "my-tweets") {
        twitter()
    }
});
//Atempting to get twitter to return something
function twitter() {

    var Twitter = require('twitter');

    var client = new Twitter(keys.twitter);

    var params = {
        screen_name: 'Gwenchy',
        count: 20
    };

    client.get('statuses/user_timeline', params, function (error, tweets, response) {
        if (!error) {
            for (var i = 0; i < tweets.length; i++) {
                console.log("> ", tweets[i].text);
                console.log(" ");

            }
        }
    });

}