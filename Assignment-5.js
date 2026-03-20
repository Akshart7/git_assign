let marks = 102

if (marks < 0 || marks > 100) {
    console.log('Invalid marks entered')
}

if (marks >= 90) {
    console.log('Grade: A')
} else if (marks >= 75 && marks < 90) {
    console.log('Grade: B')
}  else if (marks >= 50 && marks < 75) {
    console.log('Grade: C')
} else {
    console.log('Grade: F')
}
