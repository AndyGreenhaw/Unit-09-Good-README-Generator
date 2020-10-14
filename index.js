// array of questions for user

// Ask all the questions
// Start generating README file
    // What item of the README am I writing (subhead, link, etc.)
    // Call that function, pass in the data it needs, and get back markdown code.
    // Add the markdown code to the README file

var inquirer = require("inquirer");
var fs = require("fs");

/////////////////////////////
// ALL QUESTIONS IN OBJECT //
/////////////////////////////

const questions = [
    {
        type: "input",
        message: "What is the name of your application",
        name: "## Application"
    },
    {
        type: "input",
        message: "Describe your application's primary purpose.",
        name: "## Description"
    },
    {
        type: "input",
        message: "Explain how the user will install this application",
        name: "## Installation",
    },
    {
        type: "input",
        message: "Explain how the user will use this application",
        name: "## Usage",
    },
    {
        type: "boolean",
        message: "Would you like your Contributing section to use the Contributor Covenant Code of Conduct?",
        name: "CovenantContributing"
    },
    {
        type: "input",
        message: "Please enter your Contributing guidelines.",
        name: "## Contributing",
    },
    {
        type: "input",
        message: "Provide any test instructions you'd like to include in your README.",
        name: "## Tests",
    },
    {    type: "list",
        message: "Choose which licence you would like to use for your application.",
        choices: ["GNU AGPLv2", "GNU GPLv3", "GNU LGPLv3", "Mozilla Public License 2.0", "Apache License 2.0", "MIT License", "Boost Software License 1.0", "The Unlicense"]
    },
];

///////////////////
// PROMPT STARTS //
///////////////////

inquirer.prompt(questions)

// function to write README file
function writeToFile(fileName, data) {
    console.log(response);
      
};

// function to initialize program
function init() {
};

// function call to initialize program
init();



// fs is a Node standard library package for reading and writing files


// return the contents of 'data.csv' as a string in the variable "data"
// "utf8" encodes the raw buffer data in human-readable format
