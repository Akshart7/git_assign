// Task:
// • Store predefined username and password
// • Ask user input (simulate with variables)
// • Validate:
// o Username must match
// o Password must match
// • Add extra condition:
// o If both are wrong → "Both incorrect"
// o If one is wrong → specific message

// Expected Output:
// Login successful!

// or
// Incorrect password

let username = 'Suresh'
let password = '12345'

let inputUsername;
let inputPassword;



// Simulating user input
inputUsername = 'Suresh'
inputPassword = '12345'

if (inputUsername === username && inputPassword === password) {
    console.log('Login successful!')
} else if (inputUsername !== username && inputPassword !== password) {
    console.log('Both incorrect')
} else if (inputUsername !== username) {
    console.log('Incorrect username')
} else if (inputPassword !== password) {
    console.log('Incorrect password')
}