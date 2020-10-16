const inquirer = require("inquirer");
const fs = require("fs");

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
        choices: [
            "GNU AGPLv2", 
            "GNU GPLv3", 
            "GNU LGPLv3", 
            "Mozilla Public License 2.0", 
            "Apache License 2.0", 
            "MIT License", 
            "The Unlicense"
        ],
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

// [User Story ](##-User-Story)

inquirer.prompt(questions).then(function(response){
    console.log(response);

    var textForFile = "## Project Title: " + response.appName + "\n" + "\n";
    var licenseBadge;

            if(response.appLicense === "GNU AGPLv2"){
                licenseBadge = "![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)"
            } else if (response.appLicense === "GNU GPLv3"){
                licenseBadge = "![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)"
            } else if (response.appLicense === "GNU LGPLv3"){
                licenseBadge = "![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)"
            } else if (response.appLicense === "Mozilla Public License 2.0"){
                licenseBadge = "![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)"
            } else if (response.appLicense === "Apache License 2.0"){
                licenseBadge = "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)"
            } else if (response.appLicense === "MIT License"){
                licenseBadge = "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)"
            } else if (response.appLicense ===  "The Unlicense"){
                licenseBadge = null;
            }

        textForFile = textForFile + licenseBadge + "\n" + "\n";
        
        textForFile = textForFile + 
        "## Table of Contents" + "\n" + "\n" +
        "( * ) [Description](##-Description)" + "\n" +  "\n" +
        "( * ) [Installation](##-Installation)" + "\n" +  "\n" +
        "( * ) [Usage](##-Usage)" + "\n"  + "\n" +
        "( * ) [Contributing](##-Contributing)" + "\n" +  "\n" +
        "( * ) [Tests](##-Tests)" + "\n" +  "\n" +
        "( * ) [License](##-License)" + "\n" +  "\n" +
        "( * ) [Contact](##-Contact)" + "\n" + "\n" + "\n";

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

        console.log("Your README File Has Been Written")

    })


    })

// These init functions were included in the original homework project code

//function to initialize program
function init() {};

//function call to initialize program
init();

