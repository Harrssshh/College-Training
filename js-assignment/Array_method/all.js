let fruits1 = ["apple", "banana"];
fruits1.push("orange");
console.log(fruits1);   



let fruits2 = ["apple", "banana", "orange"];
fruits2.pop();  
console.log(fruits2); 



let fruits3 = ["apple", "banana", "orange"];
fruits3.shift();  
console.log(fruits3);  



let fruits4 = ["banana", "orange"];
fruits4.unshift("apple");  
console.log(fruits4);  



let fruits5 = ["apple", "banana", "orange"];
fruits5.splice(1, 1, "grape");  
console.log(fruits5);  



let fruits6 = ["apple", "banana", "orange", "grape"];
let citrusFruits = fruits6.slice(1, 3); 
console.log(citrusFruits); 



let fruits7 = ["apple", "banana", "orange", "grape"];
let index = fruits7.indexOf("orange");  
console.log(index);  




let numbers1 = [1, 2, 3, 4];
let doubled = numbers1.map(function(num) {
    return num * 2;  
});
console.log(doubled);  



let numbers2 = [1, 2, 3, 4, 5, 6];
let evenNumbers = numbers2.filter(function(num) {
    return num % 2 === 0;  
});
console.log(evenNumbers); 



let numbers3 = [1, 2, 3, 4];
let sum = numbers3.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue; 
}, 0);  
console.log(sum);