const inquirer = require('inquirer');
const mysql = require('mysql');
const connection = require('./config/connection');
const console = require('console.table');
const db = require('.');

connection.connect(function(err){
    if (err) throw err;
    console.log('Connected as ID ' + connection.threadId);
    startPrompt();
});
function startPrompt(){
    inquirer
    .prompt({
        type: 'list',
        choices: [
            'View Departments',
            'View Roles',
            'View Employees',
            'Add Department',
            'Add Role',
            'Add Employee',
            'Update Employee Role',
            'Quit'
        ],
        message: 'Pick One.....NOW',
        name: 'option'
    })
    
}
