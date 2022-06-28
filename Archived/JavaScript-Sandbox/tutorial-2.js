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

// Lowercase letters of my name
let myName = "HOODAD".toLowerCase();

// Display my Age in Dog Years
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);