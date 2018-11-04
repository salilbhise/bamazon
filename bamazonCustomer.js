// require npm packages
var mysql = require("mysql");
var inquirer = require("inquirer");

// create connection to mysql database
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "bamazon_db"
});

// connect to database 
connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    console.log("I am here");
    displayProducts();
  });
  
  function displayProducts() {
    // construct the database query string
    queryStr = 'SELECT * FROM products';
  
    // make the database query
    connection.query(queryStr, function (err, data) {
      if (err) throw err;
  
      console.log('Existing Inventory:');
      console.log('........-------...........\n');
  
  
      var strOut = '';
      for (var i = 0; i < data.length; i++) {
        strOut = '';
        strOut += 'Item ID: ' + data[i].item_id + ' | ';
        strOut += 'Product Name: ' + data[i].product_name + ' | ';
        strOut += 'Department: ' + data[i].department_name + ' | ';
        strOut += 'Price: $' + data[i].price + ' | ';;
        strOut += 'Stock Quantity : ' + data[i].stock_quantity + '\n';
  
        console.log(strOut);
      }
  
      console.log("---------------------------------------------------------------------\n\n");
  
      // user input for item and quantity they would like to purchase
  
      userInput();
    })
  
  }
  
  
  // validateInput ensures that the user is supplying only positive integers for their inputs
  function validateInput(value) {
    var integer = Number.isInteger(parseFloat(value));
    var sign = Math.sign(value);
  
    if (integer && (sign === 1)) {
      return true;
    } else {
      return 'Please enter a whole non-zero number.';
    }
  }
  
  function userInput() {
    inquirer.prompt([
  
      {
        name: "choice",
        type: "list",
        choices: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42'],
        message: "What item would you like to purchase?"
      },
  
  
      {
        type: 'input',
        name: 'quantity',
        message: 'What quantity do you need?',
        validate: validateInput,
        filter: Number
      }
  
  
    ]).then(function (input) {
  
      let item = input.choice;
      let quantity = input.quantity;
  
      // query database to confirm that the given item ID exists in the desired quantity
      var queryStr = 'SELECT * FROM products WHERE ?';
  
      connection.query(queryStr, {
        item_id: item
      }, function (err, data) {
        if (err) throw err;
        // log all results of the SELECT statement
        var productData = data[0];
  
        if (productData.stock_quantity < quantity) {
          console.log('Sorry, there is not enough product in stock, your order can not be placed as is.');
          console.log('Please modify your order.\n');
          displayProducts();
  
        } else {

          // construct the updating query string

          var updateQueryStr = 'UPDATE products SET stock_quantity = ' + (productData.stock_quantity - quantity) + ' WHERE item_id = ' + item;
          // console.log('updateQueryStr = ' + updateQueryStr);
  
          // update inventory
          connection.query(updateQueryStr, function (err, data) {
            if (err) throw err;
            console.log("\n\n---------------------------------------------------------------------");
            console.log('Your order has been placed! Your total is $' + productData.price * quantity);
            console.log('Thank you for your order!');
            console.log('---------------------------\n');
            purchaseAgain();
          })
        }
      });
    })
  }
  
  function purchaseAgain() {
    inquirer.prompt([
  
      {
        name: "yesOrno",
        type: "list",
        message: "Would you like to purchase another item (yes or no)?",
        choices: ["yes", "no"]
      }
    ]).then(function (answer) {

      // based on their answer, either call the bid or the post functions
      if (answer.yesOrno.toUpperCase() === "NO") {
        console.log("Exiting the bamazon customer app");
        console.log('\nGoodbye!')
        connection.end();
      } else {
        displayProducts();
      }
    })
  }