var inquirer = require("inquirer")
var fs = require("fs")
// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "Please enter your project title"
    },
    {
        type: "input",
        name: "description",
        message: "please enter a description"
    },
    {
        type: "input",
        name: "toc",
        message: "please enter Table of Contents items seperated by a ,"
    },
    {
        type: "input",
        name: "installation",
        message: "Please enter your project installation steps"
    },
    {
        type: "input",
        name: "usage",
        message: "Please enter your project Usage"
    },
    {
        type: "input",
        name: "license",
        message: "Please enter any License info"
    },
    {
        type: "input",
        name: "contributing",
        message: "Please enter info for Contributing"
    },
    {
        type: "input",
        name: "tests",
        message: "Please enter any tests"
    },
    {
        type: "input",
        name: "questions",
        message: "Please enter info for Questions"
    },

    
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then(function(data){
        console.log(data)
    })
}
// function validInput(input){
    
//         if (input === " ") {
//            return 'Incorrect asnwer';
//         }
//         console.log("next question");
// }
// function call to initialize program
init();
