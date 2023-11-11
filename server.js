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
    .then(function(result){
        console.log('You chose: ' + result.option);

        switch (result.option){
            case 'View Departments':
                addDepartment();
                break;
            case 'View Roles':
                viewRoles();
                break;
            case 'View Employees':
                viewEmployees();
                break;

            case 'Add Department':
                addDepartment();
                break;
            case 'Add Role':
                addRole();
                break;
            case 'Add Employee':
                addEmployee();
                break;
            case 'Update Employee Role':
                updateEmployeeRole();
                break;
            default:
                quit();
        }
    });
}
