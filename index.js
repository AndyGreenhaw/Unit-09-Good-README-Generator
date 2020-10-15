// array of questions for user

// Ask all the questions
// Start generating README file
    // What item of the README am I writing (subhead, link, etc.)
    // Call that function, pass in the data it needs, and get back markdown code.
    // Add the markdown code to the README file

    var inquirer = require("inquirer");
    var fs = require("fs");

const questions = [
    {
        type: "input",
        message: "What is the name of your application?",
        name: "appName"
    },
    {
        type: "input",
        message: "Describe your application's primary purpose.",
        name: "appDescription"
    },
    {
        type: "input",
        message: "Explain how the user will install this application.",
        name: "appInstallation",
    },
    {
        type: "input",
        message: "Explain how the user will use this application.",
        name: "appUsage",
    },
    {
        type: "input",
        message: "Please enter your Contributing guidelines.",
        name: "appContributing",
    },
    {
        type: "input",
        message: "Provide any test instructions you'd like to include in your README.",
        name: "appTests",
    },
    {   type: "list",
        message: "Choose which licence you would like to use for your application.",
        choices: ["GNU AGPLv2", "GNU GPLv3", "GNU LGPLv3", "Mozilla Public License 2.0", "Apache License 2.0", "MIT License", "Boost Software License 1.0", "The Unlicense"],
        name: "appLicense"
    },
    {   type: "input",
        message: "What is your Git Hub username?",
        name: "appUsername"
    },
    {   type: "input",
        message: "What is your email address?",
        name: "appEmail"
    },
];


inquirer.prompt(questions).then(function(response){
    console.log(response);

    var textForFile = "## Project Title: " + response.appName + "\n" + "\n";
        textForFile = textForFile + "## Table of Contents" + "\n" + "1) Description" + "\n" + "2) Installation" + "\n" + "3) Usage" + "\n" + "4) Contributing" + "\n" + "5) Tests" + "\n" + "6) License" + "\n" + "7) Contact" + "\n" + "\n";
        textForFile = textForFile + "## Description" + "\n" + "\n" + response.appDescription + "\n" + "\n";
        textForFile = textForFile + "## Installation" + "\n" + "\n" + response.appInstallation + "\n" + "\n";
        textForFile = textForFile + "## Usage" + "\n"  + "\n" + response.appUsage + "\n" + "\n";
        textForFile = textForFile + "## Contributing" + "\n" + "\n" + response.appContributing + "\n" + "\n";
        textForFile = textForFile + "## Tests" + "\n"  + "\n" + response.appTests + "\n" + "\n";
        textForFile = textForFile + "## License" + "\n"  + "\n" + JSON.stringify(response.appLicense) + "\n" + "\n";
        textForFile = textForFile + "## Contact" + "\n"  + "\n" + "For questions related to this application, email " + response.appEmail + " or visit http://github.com/" + response.appUsername + " for the latest information related to this application." + "\n" + "\n";

    fs.writeFile("NewREADME.md", textForFile, function(err){
        if(err){
            return console.log(err);
        }

        console.log("File Written")
    })


    })


// function to write README file


//function to initialize program
function init() {};

//function call to initialize program
init();



// fs is a Node standard library package for reading and writing files


// return the contents of 'data.csv' as a string in the variable "data"
// "utf8" encodes the raw buffer data in human-readable format
