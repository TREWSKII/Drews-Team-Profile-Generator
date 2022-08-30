// inquier
const inquirer = require("inquirer");
// fs mod to create html file simlar to the read activitie
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const fs = require("fs");
const path = require("path");

const resolvesPaths = path.resolve(__dirname, "output");
const joinsPaths = path.join(resolvesPaths, "myteam.html");
const render = require("./src/html.js");

function init() {
    function createMngr() {
        inquirer.prompt([{

        }]);
        createMenu();
    }
    function createMenu() {
        // do you want to add an engineer? add questions.
    }
    function createEngineer(params) {
        createMenu();
    }

    function createIntern(params) { }
    function buildTeam() {

    }
    createMngr();
}


init();

// need to creaete a sort of generate markdown.
const questions = [
    {
        type: "name",
        message: "what is your managers name",
        name: "title",
    },
    {
        type: "input",
        message: "enter intut here for first criteria",
        name: "title",
    },
    {
        type: "input",
        message: "enter intut here for first criteria",
        name: "title",
    },
    {
        type: "input",
        message: "enter intut here for first criteria",
        name: "title",
    },
    {
        type: "input",
        message: "enter intut here for first criteria",
        name: "title",
    },
    {
        type: "input",
        message: "enter intut here for first criteria",
        name: "title",
    },
    {
        type: "input",
        message: "enter intut here for first criteria",
        name: "title",
    },
    {
        type: "input",
        message: "enter intut here for first criteria",
        name: "title",
    },
    {
        type: "input",
        message: "enter intut here for first criteria",
        name: "title",
    },
    {
        type: "input",
        message: "enter intut here for first criteria",
        name: "title",
    },
];
//we will need some sort of validation

//!: write read me
function writeToFile(fileName, data) {
    return fs.writeFile(fileName, data, function (err) {
        console.log(fileName);
        console.log(data);
        if (err) {
            return console.log(err);
        } else {
            console.log("completed");
        }
    });
}

// !: init program
function init() {
    inquirer.prompt(questions).then(function (data) {
        writeToFile("index.html", data);
        console.log(data);
    });
}

//!: calling init program
init();
