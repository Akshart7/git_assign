let weather = -4
let type;

if (weather > 0) {
    type = 'Positive'
} else if (weather === 0) {
    type = 'Neutral'
} else {
    type = 'Negative'
}

let value;
if (weather % 2 === 0) {
    value = 'Even'
} else {
    value = 'Odd'
}

console.log(`The weather ${weather} is ${type} and ${value}.`)
