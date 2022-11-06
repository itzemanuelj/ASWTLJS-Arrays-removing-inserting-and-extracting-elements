// What keyword removes the first element of an array?
contries.shift();

// What keyword adds one or more elements to the beginning of an array?
contries.unshift('USA', 'Mexico', 'Canada');

// What keyword inserts new elements anywhere in an array and/or removes elements from an array?
countries.splice(0, 1, 'England');

// What keyword copies elements from an array to another array?
countries.slice();

const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]

//The slice() method extracts a section of a string and returns 
//it as a new string, without modifying the original string.

// same in array but you select elements not characters  


const str = 'The quick brown fox jumps over the lazy dog.';

console.log(str.slice(31));
// expected output: "the lazy dog." 

// add "cake" and "cookie" to the beginning of the array sweets.
sweets.unshift('cake', 'cookie');

// This statement created the array:
var sizes = ["S", "M", "XL", "XXL", "XXXL"];
// Insert "L" into the array between "M" and "XL".

sizes.splice(2, 0, 'L');

// This statement created the array:
var sizes = ["S", "M", "XL", "XXL", "XXXL"];
// Copy the first 3 sizes of the array and put them into a new array, regSizes.
let regSizes = sizes.slice(0, 3);

// Remove the first element of an array.
contries.shift();

// Add three number elements to the beginning of an array.
number.unshift(1, 2, 3);

// This statement created the array:
var pets = ["dog", "cat", "ox", "duck", "frog"];

// Add 2 elements after "dog" and remove "cat", "ox", and "duck".
// pets.splice(0, 'element 1', 'element 2');
pets.splice(1, 3, "fish", "monkey");

// This statement created the array:
var pets = ["dog", "cat", "ox", "duck", "frog"];
// Remove "cat" and "ox".

pets.slice(1, 2);

// This statement created the array:
var pets = ["dog", "cat", "ox", "duck", "frog", "flea"];
// Reduce it to "duck" and "frog" using slice.

pets.slice(3, 5);

// Remove the first element of an array.
numbers.shift();

// Add three number elements to the beginning of an array.
numbers.unshift(1, 2, 3);

// This statement created the array:
var pets = ["dog", "cat", "ox", "duck", "frog"];
// Add 2 elements after "dog" and remove "cat", "ox", and "duck".
pets.splice(1, 3);
pets.splice(1, 3, "fish", "monkey");
