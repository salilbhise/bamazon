# Bamazon! :package:

## Overview
Bamazon is an Amazon-like app that uses Node.js & MySQL to take in orders from customers and deplete stock from the store's inventory and simulate the function of a shopping app.

## The functionality is very simple. Once the app opens it does the following:

- Lists the current products for sale for the user
- Prompts the user to select the product they want by the product id.
- Once the product is selected, prompts the user for how many of the selected product they would like to purchase
  - If the product is available, the user will see the total amount of the selected product that are available, the price of       their selection based on how many they specified, and finally will tell the user when their order will arrive.
  - If the product isn't available, the user will be told that it's out of stock and to check back later.
- After the user makes a purchase they will be prompted with the option to continue shopping or to leave the app

## Technologies used:
- Javascript
- Node.js
- mySQL

## NPM packages used:
- mysql
- inquirer
