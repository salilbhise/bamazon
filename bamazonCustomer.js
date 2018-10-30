// Required NPM Packages
const mysql = require("mysql");
const inquirer = require("inquirer");

// Connection to mysql database
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306, 
    user: "root", 
    password: "",
    database: "bamazon"
});

