DROP DATABASE IF EXISTS bamazonDB;

CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NULL,
  department_name VARCHAR(45) NULL,
  price DECIMAL(10,2) NULL,
  stock_quantity INT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("shea butter", "skin care", 8.65, 350);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("organic dark chocolate", "food", 9.15, 240);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("mortal kombat 10", "video games", 49.99, 150);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Planet Earth Blu Ray", "movies", 89.95, 305);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Hanes Boxer-Breifs (4-pack)", "apparel", 12.55, 440);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Nintendo Switch SSB Bundle", "electronics", 519.99, 150);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Chanelle No. 5", "beauty", 160.00, 170);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("60inch Plasma HD TV", "electronics", 1799.95, 80);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Nature Valley Granola Bar 12pck", "very very dry things", 14.99, 300);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Cat Carrier", "pets", 35.49, 150);