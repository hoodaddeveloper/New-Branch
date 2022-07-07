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

while (x >= 0) {
  myArray.push(x);
  x--;
}

console.log(myArray);

///// Iterate with JavaScript For Loops /////

// Example 1:

const yourArray = [];

for (let i = 0; i < 10; i++) { // start at 0, stop before 10 (not including 10) and increment by 1
  yourArray.push(i);
}

console.log(yourArray); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// Example 2:

const myArray2 = [];

for (let q = 1; q < 7; q++) {
  myArray2.push(q);
}

console.log(myArray2); // [1, 2, 3, 4, 5, 6]

// Example 3:

const myArray3 = [];

for (s = 0; s < 20; s += 2) {
  myArray3.push(s);
}

console.log(myArray3);