console.log("Welcome to the Tip and Delivery Calculators!");


// Function declaration: calculates the tip amount
// bill = bill amount, percent = tip percentage
function calculateTip(bill, percent) {
  // Multiply the bill by the percent and divide by 100
  return bill * percent / 100;
}


// Function declaration: returns the delivery fee
// total = order total, city = delivery city
function getDeliveryFee(total, city) {
  // Free delivery for big orders (comparison operator)
  if (total >= 50) {
    return 0;
  }

  // Lower fee for JAWZJAN, normal fee for other cities (strict equality)
  // toLowerCase() makes the check work for "JAWZJAN", "jawzjan", "JAWZJAN"
  if (city.toLowerCase() === "JAWZJAN") {
    return 2;
  }

  return 5;
}


// Three calls to calculateTip with different bills and percents
console.log("Tip 1: $" + calculateTip(100, 15).toFixed(2)); // 15.00
console.log("Tip 2: $" + calculateTip(80, 10).toFixed(2));  // 8.00
console.log("Tip 3: $" + calculateTip(45.5, 20).toFixed(2)); // 9.10


// Three calls to getDeliveryFee with different totals and cities
console.log("Delivery Fee 1: $" + getDeliveryFee(30, "Kabul").toFixed(2)); // 2.00
console.log("Delivery Fee 2: $" + getDeliveryFee(30, "Herat").toFixed(2)); // 5.00
console.log("Delivery Fee 3: $" + getDeliveryFee(75, "Herat").toFixed(2)); // 0.00