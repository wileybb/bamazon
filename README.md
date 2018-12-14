# BAMazon!!!

### Overview

This console app uses mysql and inquirer npm packages. 
Open bamazonCustomer.js in the terminal using node after instaling the node packages to start the program.
This is a simple simulation of shopping on line. There is an sql database storing information about the products for sale. Upon initializing Inquirer will prompt the user to select a number corresponding to the product they want to see. A crappy table is rendered showing all the items available with their id number, price, and available stock slopilly strewn all to the side in unequal columns :(. Please Lord... Forgive me for I have sinned...
The user enters a number corresponding to the product they want to select. Inquirer then prompts the user asking how many of the item they chose they would like to buy. After the user enters another number and presses enter, a READ query goes to the database to check if there is enough stock for the order to be completed. If there is enough items in stock, another UPDATE query will update the database to reflect that some or all of the units have been purchased. Then the user will se a console log of their order summary including item purchased, quantity purchased and USD total. I tried to make a function where the user is prompted using inquire to confirm they want to place the order after seeing their order total. However it didn't work, the inquirer prompt wouldn't fire for some reason.


![workingimage](ScreenShot1.png)

