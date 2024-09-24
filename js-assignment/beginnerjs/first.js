let firstName = prompt("Enter your first name:");
let lastName = prompt("Enter your last name:");

let fullName = firstName + " " + lastName;

console.log("Full Name: " + fullName);



let number = prompt("Enter a number:");
if (number > 0) {
    console.log("Positive");
} else if (number < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}


for (let i = 1; i <= 10; i++) {
    console.log(i);
}

function greet(name) {
    console.log("Hello, " + name + "!");
}

greet("Harsh");



let numbers = [10, 20, 30, 40, 50];

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log("Sum of numbers: " + sum);