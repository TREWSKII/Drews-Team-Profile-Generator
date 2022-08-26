// inquier
const inquirer = require('inquirer');
// fs mod to create html file simlar to the read activitie

// need to creaete a sort of generate markdown. 
const questions = [{
    type:'input',
    message: 'enter intut here for first criteria',
    name: 'title',
}, {
    type:'input',
    message: 'enter intut here for first criteria',
    name: 'title',
}, {
    type:'input',
    message: 'enter intut here for first criteria',
    name: 'title',
}, {
    type:'input',
    message: 'enter intut here for first criteria',
    name: 'title',
}, {
    type:'input',
    message: 'enter intut here for first criteria',
    name: 'title',
}, {
    type:'input',
    message: 'enter intut here for first criteria',
    name: 'title',
}, {
    type:'input',
    message: 'enter intut here for first criteria',
    name: 'title',
}, {
    type:'input',
    message: 'enter intut here for first criteria',
    name: 'title',
}, {
    type:'input',
    message: 'enter intut here for first criteria',
    name: 'title',
}, {
    type:'input',
    message: 'enter intut here for first criteria',
    name: 'title',
}, ]
//we will need some sort of validation

// 
//!: write read me
function writeToFile(fileName, data) {
    return fs.writeFile(fileName, data, function(err) {
        console.log(fileName)
        console.log(data)
        if (err) {
            return console.log(err)
        } else {
            console.log('completed')
        }
    })
}



// !: init program
function init() {
    prompt(questions)
    .then(function(data){
        writeToFile("index.html",(data));
        console.log(data)
    })
}

//!: calling init program
init();