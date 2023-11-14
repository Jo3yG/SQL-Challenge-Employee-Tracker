const inquirer = require('inquirer');
//const mysql = require('mysql2');
const connection = require('./config/connection');
const console = require('console.table');
//const db = require('.');

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
                viewDepartments();
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
                updateEmployee();
                break;
            default:
                quit();
        }
    });
}
function viewDepartments(){
    let query = 'SELECT * FROM department';
    connection.query(query, function(err, res){
        if (err) throw err;
        console.table(res);
        startPrompt();
    });
}
function viewRoles(){
    let query = 'SELECT * FROM role';
    connection.query(query, function(err, res){
        if (err) throw err;
        console.table(res);
        startPrompt();
    });
}
function viewEmployees(){
    let query = 'SELECT * FROM employee';
    connection.query(query, function(err, res){
        if (err) throw err;
        console.table(res);
        startPrompt();
    });
}
function addDepartment(){
    inquirer
    .prompt({
        type: 'input',
        message: 'Name of Department?',
        name: 'deptName;'
    })
    .then(function(answer){
        connection.query('INSERT INTO department (name) VALUES (?)', 
        [answer.deptName], function(err,res){
            if (err) throw err;
            console.table(res)
            startPrompt()
        })
    })
}
function addRole(){
    inquirer
    .prompt([
        {
            type: 'input',
            message: 'Name of role?',
            name: 'roleName'
        },
        {
            type: 'input',
            message: 'Salary of role',
            name: 'totalSalary'
        },
        {
            type: 'input',
            message: 'Department ID',
            name: 'deptID'
        }
    ])
    .then(function(answer){
        connection.query('INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)',
        [answer.roleName, answer.totalSalary, answer.deptID], function(err, res){
            if (err) throw err;
            console.table(res);
            startPrompt();
        });
    });
}
function addEmployee(){
    inquirer
    .prompt([
        {
            type: 'input',
            message: 'First Name?',
            name: 'firstName'
        },
        {
            type: 'input',
            message: 'Last Name?',
            name: 'lastName'
        },
        {
            type: 'input',
            message: 'Employee role ID #',
            name: 'roleID'
        },
        {
            type: 'input',
            message: 'Manager ID or null',
            name: 'managerID'
        }
    ])
    .then(function(answer){
        connection.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)',
        [answer.firstName, answer.lastName, answer.roleID, answer.managerID], function(err, res){
            if (err) throw err;
            console.table(res);
            startPrompt();
        });
    });
}
function updateEmployee(){
    inquirer
    .prompt([
        {
            type: 'input',
            message: 'Employee to be updated?',
            name: 'updateEmp'
        },
        {
            type: 'input',
            message: 'What do you want to update to?',
            name: 'updateRole'
        }
    ])
    .then(function(answer){
        connection.query('UPDATE employee SET role_id=? WHERE first_name=?',
        [answer.updateRole, answer.updateEmp], function(err,res){
            if (err) throw err;
            console.table(res);
            startPrompt();
        });
    });
}
function quit(){
    connection.end();
    process.end;
}
