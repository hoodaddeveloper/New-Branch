///// While Loops /////

// Example 1:
const ourArray = [];
let i = 1; // start at 1

while (i < 5) { // while i is less than 5
  ourArray.push(i); // add the number to the end of the array
  i++;
}

console.log(ourArray); // [1, 2, 3, 4]

// Example 2:

const myArray = [];
let x = 5;

while (x > -1) {
  myArray.push(x);
  x--;
}

console.log(myArray);