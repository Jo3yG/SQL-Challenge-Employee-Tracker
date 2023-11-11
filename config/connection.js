const mysql = require('mysql2');
require('dotenv').config();

const connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: process.env.DB_USER,
    password: process.env.DB_PW,
    database: 'employeesDB'
});

module.exports = connection;
