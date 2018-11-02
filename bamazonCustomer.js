// required npm packages
const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require("console.table");
const colors = require("colors");

// create the connection information for the sql database
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "bamazon_db"
});

// connect to the mysql server and sql database
connection.connect(function (err) {
    if (err) throw err;
    console.log('connected as id ' + connection.threadId);
});

// display items for sale from mysql database
var purchaseItem = function () {
        connection.query("SELECT item_id, product_name, department_name, price, stock_quantity FROM products", function (error, result) {
                if (error) throw error;
                var table = new Table({
                    head: ["ID", "Product", "Department", "Price", "Stock Quantity"]
                });
                console.log("Current stock of items for sale");
                for (var i = 0; i < result.length; i++) {
                    table.push([result[i].item_id, result[i].product_name, result[i].department_name, result[i].price.toFixed(2), result[i].stock_quantity])
                }
                console.log(table.toString());
            }
        }