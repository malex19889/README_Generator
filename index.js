var inquirer = require("inquirer")
var fs = require("fs")
const generateMd = require("./utils/generateMarkdown.js")
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);
// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "Please enter your project title",
    },
    {
        type: "input",
        name: "description",
        message: "please enter a description"
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
function writeToFile(fileName, readme) {
    writeFileAsync(fileName, readme);
}

// function to initialize program
async function init() {
    try {
       const answers = await userPrompts(questions); 
       const readme = generateMd(answers);
       const fileName = answers.title+".md";
       await writeToFile(fileName,readme)
    } catch (err) {
        console.log(err)
    }
}function userPrompts(){
   return inquirer.prompt(questions)  
}
// validation function
function validInput(input){
    
        if (input === "") {
           return 'Incorrect asnwer';
        }
        console.log("next question");
}
// function call to initialize program
init();
