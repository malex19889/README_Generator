var inquirer = require("inquirer")
var fs = require("fs")
// array of questions for user
const questions = [
    {
        type: "input",
        name: "Title",
        message: "Please enter your project title"
    },
    {
        type: "input",
        name: "Description",
        message: "please enter a description"
    },
    {
        type: "input",
        name: "Table of Contents",
        message: "please enter Table of Contents items seperated by a ,"
    },
    {
        type: "input",
        name: "Installation",
        message: "Please enter your project installation steps"
    },
    {
        type: "input",
        name: "Usage",
        message: "Please enter your project Usage"
    },
    {
        type: "input",
        name: "License",
        message: "Please enter any License info"
    },
    {
        type: "input",
        name: "Contributing",
        message: "Please enter info for Contributing"
    },
    {
        type: "input",
        name: "Tests",
        message: "Please enter any tests"
    },
    {
        type: "input",
        name: "Questions",
        message: "Please enter info for Questions"
    },

    
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
}

// function call to initialize program
init();
