/* 
  This is a practice to understand
  JavaScript Basics.
  First File was the helloworld.js
*/

/////     Literals in JavaScript     /////

// Object {}
// Boolean true, false
// String "", ''
// Template ``
//
//

/////     The Increment and Decrement Operator     /////

let a = 10;
a++;
console.log(a); // 11

let b = 10;
b--;
console.log(b); // 9

/////     String Concatenation with Variables     /////

let myPet = "Short hair Cat";
console.log("I own a Pet and she is a " + myPet + ".");

/////     String Interpolation     /////

// First Message
const myMessage1 = `This is my first Message writen in a single line and will be shown in the output just like this.`;
console.log(myMessage1);

// Second Message
const myMessage2 = `This is my second Message.

This will be in some different lines with spaces & will be shown
just like I wrote it like this.

This is because of using Literals in JavaScript ES6.`;

console.log(myMessage2);

// Using Placeholder
let myName = "Hoodad";
let myCity = "Shiraz";
let food = "Kebab";

console.log(`My name is ${myName},
I live in ${myCity},
and my favrite food is ${food}.`);

/////     typeof operator     /////

