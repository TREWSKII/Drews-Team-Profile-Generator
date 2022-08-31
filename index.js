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
const generatehtml = require('./generatehtml');

function init() {
    const team = ['']
    function createMngr() {
        inquirer
            .prompt([
                {
                    type: "name",
                    message: "what is your managers name?",
                    name: "name",
                },
                {
                    type: "id",
                    message: "what is your managers id?",
                    name: "id",
                },
                {
                    type: "email",
                    message: "what is your managers email?",
                    name: "email",
                },
                {
                    type: "officeNumber",
                    message: "what is your office number?",
                    name: "officeNumber",
                },
            ])
            .then((val) => {
                const manager = new Manager(val.name, val.id, val.email, val.officeNumber);
                team.push(manager);
                //! manager card creation goes here.
                createMenu();
            });
    }


function createMenu() {
    // do you want to add an engineer? add questions. // ! what type of teamate do you want to add?
    inquirer
        .prompt([{
            type: "list",
            message: "what type of teammate do you want to add?",
            name: "addEmployeePrompt",
            choices: ["Engineer", "Intern", "No more teammates needed"]
        }])

        .then(function (userInput) {
            switch (userInput.addEmployeePrompt) {
                case "Manager":
                    addManager();
                    break;
                case "Engineer":
                    addEngineer();
                    break;
                case "Intern":
                    addIntern();
                    break;

                default:
                    htmlBuilder();
            }
        })
}
function addEngineer() {
    inquirer.prompt([

        {
            type: "input",
            name: "engineerName",
            message: "What is the engineer's name?"
        },

        {
            type: "input",
            name: "engineerId",
            message: "What is the engineer's employee ID number?"
        },

        {
            type: "input",
            name: "engineerEmail",
            message: "What is the engineer's email address?"
        },

        {
            type: "input",
            name: "engineerGithub",
            message: "What is the engineer's GitHub username?",
        }])
        .then((val) => {
            const engineer = new Engineer(val.engineerName, val.engineerId, val.engineerEmail, val.engineerGithub);
            console.log(engineer)
            //! manager card creation goes here.
            createMenu();

        })
    }
    function addIntern() {
        inquirer.prompt([
    
            {
                type: "input",
                name: "internName",
                message: "What is the Interns's name?"
            },
    
            {
                type: "input",
                name: "internId",
                message: "What is the intern's employee ID number?"
            },
    
            {
                type: "input",
                name: "internEmail",
                message: "What is the intern's email address?"
            },
    
            {
                type: "input",
                name: "internSchool",
                message: "What is the intern's GitHub username?",
            }])
            .then((val) => {
                const intern = new Intern(val.internName, val.internId, val.internEmail, val.internSchool);
                console.log(intern)
                //! manager card creation goes here.
                createMenu();
            })
        }
createMngr();
}

init();

// need to creaete a sort of generate markdown.
// const questions = [
//   {
//     type: "name",
//     message: "what is your managers name",
//     name: "title",
//   },
//   {
//     type: "input",
//     message: "enter intut here for first criteria",
//     name: "title",
//   },
//   {
//     type: "input",
//     message: "enter intut here for first criteria",
//     name: "title",
//   },
//   {
//     type: "input",
//     message: "enter intut here for first criteria",
//     name: "title",
//   },
//   {
//     type: "input",
//     message: "enter intut here for first criteria",
//     name: "title",
//   },
//   {
//     type: "input",
//     message: "enter intut here for first criteria",
//     name: "title",
//   },
//   {
//     type: "input",
//     message: "enter intut here for first criteria",
//     name: "title",
//   },
//   {
//     type: "input",
//     message: "enter intut here for first criteria",
//     name: "title",
//   },
//   {
//     type: "input",
//     message: "enter intut here for first criteria",
//     name: "title",
//   },
//   {
//     type: "input",
//     message: "enter intut here for first criteria",
//     name: "title",
//   },
// ];
// //we will need some sort of validation

// //!: write read me
// function writeToFile(fileName, data) {
//   return fs.writeFile(fileName, data, function (err) {
//     console.log(fileName);
//     console.log(data);
//     if (err) {
//       return console.log(err);
//     } else {
//       console.log("completed");
//     }
//   });
// }

// // !: init program
// function init() {
//   inquirer.prompt(questions).then(function (data) {
//     writeToFile("index.html", data);
//     console.log(data);
//   });
// }

// //!: calling init program
// init();
