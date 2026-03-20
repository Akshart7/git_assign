// Smart Discount Calculator

// Task:
// Create a program that:
// • Takes a user's name, age, and purchaseAmount
// • Applies discounts based on rules:
// o If age < 18 → 10% discount
// o If age ≥ 60 → 20% discount
// o If purchaseAmount > 5000 → extra 5% discount
// • Use logical operators to combine conditions
// • Output a message using template literals
// Expected Output Example:
// Hi Suresh! You received a total discount of 25%. Final amount: ₹5000


let name = 'Suresh'
let age = 65
let purchaseAmount = 6000

let discount = 0

if (age < 18) {
    discount += 10
    console.log(`Hi ${name}! You received a total discount of ${discount}%. Final amount: ₹${purchaseAmount - (purchaseAmount * discount / 100)}`)
    purchaseAmount = purchaseAmount - (purchaseAmount * discount / 100) // updating the purchaseAmount after applying the age-based discount
} else if (age >= 60) {
    discount += 20  
    console.log(`Hi ${name}! You received a total discount of ${discount}%. Final amount: ₹${purchaseAmount - (purchaseAmount * discount / 100)}`)
} if (purchaseAmount > 5000) {
    discount += 5
    console.log(`Hi ${name}! You received an extra discount of ${discount}%. Final amount: ₹${purchaseAmount - (purchaseAmount * discount / 100)}`)
}

let finalAmount = purchaseAmount - (purchaseAmount * discount / 100);

console.log(`Hi ${name}! You received a total discount of ${discount}%. Final amount: ₹${finalAmount}`);

