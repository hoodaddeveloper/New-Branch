/////     Codecademy     /////

// An statement that checks if mood is 'sleepy' and tirednessLevel is greater than 8

let mood = 'sleepy';
let tirednessLevel = 8;

if (mood === 'sleepy' && tirednessLevel > 8) {
  console.log('time to sleep');
} else {
  console.log('not bed time yet');
}

// Truthy and Falsy

/* 
  The answer will be "false" if the values are: 
  - "0"
  - Empty strings like "" or ''
  - "null" which represent when there is no value at all
  - "undefined" which represent when a declared variable lacks a value
  - "NaN", or Not a Number
*/

let wordCount = "Yes"; // Change this line.

if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}

// The code below checks if username is defined and assigns a default string if it is not

let userName = ""; // Change this line
let defaultName;