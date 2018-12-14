var mysql = require("mysql");
var inquirer = require("inquirer");

const cTable = require('console.table');

var mysql = require("mysql");
var inquirer = require("inquirer");

let itemId = "";
let itemQuantity = "";
let newStockQuantity = 0;

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "bamazonDB"

});


function renderTable(){

  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    // Log all results of the SELECT statement
    console.log("id");
    for(var i = 0; i < res.length; i++){
      console.log(res[i].item_id + " | " + res[i].product_name + " | " + res[i].price + "$ | " + res[i].stock_quantity + " in stock | " + res[i].department_name);
    };
  });  

}



connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  welcome();

});

  
function welcome(){
    renderTable();
    console.log("welcome to bamazon! :)");

    inquirer
     .prompt([
        {
        type: "input",
        message: "What item would you like to buy?(enter item id #)",
        name: "itemId"
        },
        {
        type: "input",
        message: "How many would you like to buy?",
        name: "quantity"
        }
    ])
    .then(function(inquirerResponse) {
    //   console.log(inquirerResponse.itemId + inquirerResponse.quantity);
      itemId = inquirerResponse.itemId;
      itemQuantity = inquirerResponse.quantity;
      purchaseItem();
    });

}

function purchaseItem(){

    connection.query("SELECT * FROM products WHERE item_id ="+itemId, function(err, res) {
        if (err) throw err;
        // Log all results of the SELECT statement
        var currentStock = res[0].stock_quantity;
        var orderTotal = res[0].price * itemQuantity

        if(currentStock < itemQuantity){
            console.log("Sorry, we do not have that in stock.");
            welcome();
        }else{
            function(){
          inquirer
           .prompt([
             {
              type: "list-input",
              message: "Your total is: " + orderTotal.toFixed(2) + "$ ",
              choices: ["Place Order","Cancel Order"],
              name: "sure"
             }
           ])
           .then(function(inquirerResponse) {
             if(inquirerResponse.sure === "Place Order"){
               console.log("------------------------------ORDER PLACED! Thank You!-------------------------------------------");
               console.log(" ");
            console.log("Purchase of "+ itemQuantity + " " + res[0].product_name +  " for a total of " + orderTotal.toFixed(2) + "$ Complete... Thank you, shop with us again soon!");
            newStockQuantity = currentStock - itemQuantity;
            updateStock();
             }else{
               console.log("order canceled");
               welcome();
             }
           });
            }
      }
    });

}

function updateStock(){
    var query = connection.query(
        "UPDATE products SET ? WHERE ?",
        [
          {
            stock_quantity: newStockQuantity
          },
          {
            item_id: itemId
          }
        ],
        function(err, res) {
          console.log(res.affectedRows + " products updated!\n");
        welcome();
        }
      );

}
