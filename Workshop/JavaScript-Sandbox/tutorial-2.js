/////     Convert celsius to Newton     /////

// The celsius is 200 degrees
let celsius = 200;

// Convert to Newton
let newton = celsius * (33 / 100);

// Round down
newton = Math.floor(newton);

console.log(`The temperature is ${newton} degrees Newton.`);

/////     Dog Years Project     /////

// My Age
const myAge = 27;

// Early Years
let earlyYears = 2;
earlyYears *= 10.5;

// Subtracting "myAge"
let laterYears = myAge - 4;

// Multiplying "laterYears"
laterYears *= 4;

// My Age in Dog Years
let myAgeInDogYears = myAge + laterYears;

// Lowercase letters of my Name
let myName = "HOODAD".toLowerCase();

// Display my Age in Dog Years
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);

// // // // //     SOME MORE PRACTICES FROM FREECODECAMP.ORG     // // // // //

/////     Use Bracket Notation to Find the First Character in a String     /////

let firstLetterOfLastName = "";
const lastName = "Lovelace";

// Use bracket notation to find the first character in lastName
firstLetterOfLastName = lastName[0];
console.log(firstLetterOfLastName); // L

// Use Bracket Notation to Find the Last Character in a String

let myFirstName = "Hoodad";
let lastLetterOfLastName = myFirstName[myFirstName.length - 1];

console.log(lastLetterOfLastName); // d