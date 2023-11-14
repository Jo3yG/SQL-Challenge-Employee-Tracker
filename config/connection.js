const mysql = require('mysql2');
require('dotenv').config();

const connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'Jxinoto1!',
    database: 'employeesDB'
});

module.exports = connection;
//process.env.DB_USER
