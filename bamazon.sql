CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
item_id INT NOT NULL AUTO_INCREMENT,
product_name VARCHAR(100) NOT NULL,
department_name VARCHAR(50) NOT NULL,
price DECIMAL(10,2) NOT NULL,
stock_quantity INT (50) NOT NULL,
PRIMARY KEY (item_id)
);


INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Apple iPhone X 64GB Silver", "Electronics", 1299.99, 4), ("Beats by Dre Solo 3 Black", "Electronics", 399.95, 1), ("DJI Inspire 2 Quadcopter Bundle", "Electronics", 20499, 2), ("Nest T3008US Learning Thermostat", "Electronics", 207.99, 11);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Pneumatic Standing Desk White", "Furniture", 379, 13), ("Tree Stump Coffee Table", "Furniture", 4750, 3), ("Homevibes Vanity Makeup Table", "Furniture", 149.99, 7);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Breville BES870XL Barista Espresso Machine", "Kitchen", 597.95, 22), ("OXO Goodgrips Garlic Press", "Kitchen", 15.99, 58), ("Omega J8006 Dual-Stage Juicer", "Kitchen", 224.42, 3);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Kewpie Japanese Mayo", "Grocery", 12.95, 17), ("Colmans Original English Mustard", "Grocery", 4.95, 5));

SELECT * FROM products;
