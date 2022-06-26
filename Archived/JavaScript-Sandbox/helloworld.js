/* 
    This is a practice to understand
    JavaScript Basics
*/

// Declaring Variables
const firstName = 'Hoodad'; // String
let lastName = 'Wesker';
let nickName = 'TheWesker';
let age = 27; // Number
let isSleeping = false // Boolean
const skills = ['Valorant', 'Overwatch', 'Developer']; // Array
let generalInfo = {
    weight: 55,
    height: 177,
    hairColor: 'Black',
    isAlive: true
} // Object

// Reassign the variable
nickName = 'TheWesker'; // String

// Print Output
console.log('First Name : ' + firstName); // First Name : Hoodad
console.log('Last Name : ' + lastName); // Last Name : Wesker
console.log('NickName : ' + nickName); // NickName : hoodaddeveloper
console.log('Age : ' + age); // Age : 27
console.log('Sleeping : ' + isSleeping); // Sleeping : false
console.log('Skills : ' + skills); // Skills : Valorant, Overwatch, Developer
console.log('General Info : ' + generalInfo); // General Info : [object Object]
console.log('Weight : ' + generalInfo.weight); // Weight : 55

// Practicing JavaScript Data Types:

/////     String     /////

let string1 = "Welcome";
let string2 = "Hello World";
let string3 = "1, 2, 3, 4, 5, 6";
console.log(string1 + string2 + string3);

/////     Number     /////

let myAge = 27;
let myMoney = 205.50;
console.log(myAge + myMoney);

/////     boolean     /////

let data = true;
/* let data = false;*/
if (data) {
    console.log('Data is true');
} else {
    console.log('Data is false');
}

/////     Null     /////

let n = null;
    console.log(n * 10);
/* The Answer is "0", because the value of "n" is "null". */

/////     Undefined     /////

let a;
console.log(a * 10);
/* The Answer is "NaN", because the value of "a" is "undefined & it is not a Number". */

/////     Symbol     /////

let b = Symbol('b');
let c = Symbol('c');
/* console.log(b != c); */
console.log(b === c);

/////     BigInt     /////

let x = BigInt(Number.MAX_SAFE_INTEGER);
console.log(x);

/////     Object     /////

let myCar = {
    make: 'Ford',
    model: 'Mustang',
    year: 1969
}
console.log(myCar);

/////     Arithmetic Operators     /////

console.log(27 + 3.5);
console.log(2022 - 1969);
console.log(65 / 240);
console.log(0.2708 * 100);