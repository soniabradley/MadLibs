var inquirer = require('inquirer');

// Create a constructor 
function MadLib(nouns, adjectives, verbs) {
    this.nouns = nouns;
    this.adjectives = adjectives;
    this.verbs = verbs;
    this.story = "My dream job is being a/an [noun] housewife. I am so [adjective] that I would rather let [noun] cook and clean so I may [verb] all day long.";
}
// Global Variables, empty arrays
var nouns = [];
var adjectives = [];
var verbs = [];
// Keep track of how many times we are looping
var loop = 0;

var getWords = function(loop) {
    // console.log(loop);
    // console.log(nouns);
    // console.log(adjectives);

    // Collect two nouns, use (loop < 2)
    if (loop < 2) {
        inquirer.prompt({
            name: "noun",
            message: "Enter a noun: "
        }).then(function (answers) {
            nouns.push(answers.noun);
            // Recursive function
            loop++;
            getWords(loop);
        })
    }

    // Collect adjective
    if (loop >= 2 && loop < 3) {
        inquirer.prompt({
            name: "adjective",
            message: "Enter an adjective: "
        }).then(function (answers) {
            adjectives.push(answers.adjective);
            loop++;
            getWords(loop);
        })
    }
    // Collect verb
    if (loop >= 3 && loop < 4) {
        inquirer.prompt({
            name: "verb",
            message: "Enter a verb: "
        }).then(function (answers) {
            verbs.push(answers.verb);
            var madLib = new MadLib(nouns, adjectives, verbs);
            // console.log(madLib);
            // Last piece of the puzzle
            constructStory(madLib);
        })
    }

    // Create Construct Story
    var constructStory = function (completeObject) {
        for (var i = 0; i < 2; i++) {
            // .replace looks thru a string and replaces with bracked entry
            completeObject.story = completeObject.story.replace("[noun]", completeObject.nouns[i]);
        }
        for (var i = 0; i < 1; i++) {
            completeObject.story = completeObject.story.replace("[adjective]", completeObject.adjectives[i]);
        }
        for (var i = 0; i < 1; i++) {
            completeObject.story = completeObject.story.replace("[verb]", completeObject.verbs[i]);
        }
        console.log(completeObject.story);
    }
}
// function
getWords(loop);