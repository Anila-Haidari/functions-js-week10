    console.log("Welcome to the Tip Calculator!");


// Bill amount
const bill = 100;

// Tip percentage
const tipPercent = 15;

// Calculate the tip
const tip = bill * tipPercent / 100;

// Calculate the total bill
const total = bill + tip;

// Split the total between 4 friends
const numberOfFriends = 4;
const perPerson = total / numberOfFriends;

// Round the per-person amount to 2 decimal places
const roundedAmount = perPerson.toFixed(2);


// Receipt information
let receiptTitle = " Tip Calculator Receipt ";
let billLine = "Bill: $" + bill;
let tipLine = "Tip: $" + tip.toFixed(2);
let totalLine = "Total: $" + total.toFixed(2);
let friendsLine = "Number of Friends: " + numberOfFriends;
let personLine = "Each Person Pays: $" + roundedAmount;


// Use trim() to remove extra spaces
receiptTitle = receiptTitle.trim();


// Print every receipt line in uppercase
console.log(receiptTitle.toUpperCase());
console.log(billLine.toUpperCase());
console.log(tipLine.toUpperCase());
console.log(totalLine.toUpperCase());
console.log(friendsLine.toUpperCase());
console.log(personLine.toUpperCase());


// Comparison and logical operators
console.log(total > bill);
console.log(numberOfFriends === 4);
console.log(tipPercent >= 10 && tipPercent <= 20);