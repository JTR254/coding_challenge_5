// Task 1 - Customer Profile

let customer = {
    name: "Carmen Rindge",
    age: 28,
    email:"carmenrindge@gmail.com"
}; // created an object with properties regarding the customer's information

console.log (`Name: ${customer.name}, Age: ${customer.age}, Email: ${customer.email}`); // logged the customer's name, age, and email

// Task 2 - Order Details

let order = { // creates an object
    orderID: 14254,
    totalAmount: 150,
    status: "Processing",

    displayOrder() {
        console.log(`Order ID: ${this.orderID}`) // logs the order ID
        console.log(`Total Amount: ${this.totalAmount}`) // logs the total amount
        console.log(`Status: ${this.status}`) // logs the status of the order
    }
};

order.displayOrder(); // calling the method, then logs the details to the console

// Task 3 - Shopping Cart

let cartItems = ["Apples", "Bananas", "Avocados"]; // declares array
cartItems.push("Pears"); // adds "Pears" to the end of the array
cartItems.pop(); // removes "Pears" from the end of the array
cartItems.unshift("Grapes"); // adds "Grapes" to the beginning of the array
cartItems.shift(); // removes "Grapes" from the beginning of the array

console.log(cartItems); // logs the array to the console

// Task 4 - Price Adjustments

prices = [100, 200, 300]; // declares array or prices
let discountedPrices = prices.map(price => price * .9); // uses the .map() method to apply a 10% discount to each of the prices

console.log("Original Prices: ", prices); // logs the original prices to the console
console.log("Discounted Prices: ", discountedPrices); // logs the discounted prices to the console

// Task 5 - Product Availability

const inventory = [4, 5, 7, 3, 0]; // declares array
const availableInventory = inventory.filter(inventory => inventory > 0); // filters array to include numbers greater than 0

console.log("Inventory: ", inventory); // logs the original array of numbers to the console
console.log("Available Inventory: ", availableInventory); // logs the new array of numbers to the console

// Task 6 - Revenue Calculation

const sales = [500, 300, 200, 400]; // declares array of sales
const total = sales.reduce((sum, sale) => sum + sale, 0); // calculating the total sales

console.log ("Sales: ", sales) // logs the original array of sales to the console
console.log ("Total Sales: ", total); // logs the total sales to the console









