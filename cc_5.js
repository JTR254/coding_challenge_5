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







