// Question 1

let numbers = [1, 2, 3, 4]

while (numbers.length > 0) {
  numbers.pop()
}

console.log(numbers);

numbers = [1, 2, 3, 4]

while (numbers.length > 0) {
  numbers.shift();
}

console.log(numbers);

numbers = [1, 2, 3, 4]
numbers.splice(0, numbers.length)

console.log(numbers);

// Question 2
console.log([1, 2, 3] + [4, 5]);

// Question 3
let str1 = 'hello there';
let str2 = str1;
str2 = 'goodbye'
console.log(str1) // hello there

// Question 4
let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1.slice();
arr2[0].first = 42;
console.log(arr1);

// Question 5
function isColorValid(color) {
  return color === "blue" || color === "green"
}

function isColorValid2(color) {
  return ['blue', 'green'].includes(color);
}

console.log(isColorValid("blue") === true)
console.log(isColorValid("green") === true) 
console.log(isColorValid2("blue") === true)
console.log(isColorValid2("green") === true) 