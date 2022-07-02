/////     New project from Codecademy     /////

let randomNumber = Math.floor(Math.random() * 1000); // Generate a random number between 0 and 1000
console.log(Math.floor(Math.random() * 1000)); // Print the random number to the console

/////     Now the whole project from Codecademy     /////

let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = false; // Set the value of the variable registeredEarly to "false" or "true"
const age = 15; // Set the value of the variable age to a number

if (age > 18 && registeredEarly) {
  raceNumber += 1000; // Add 1000 to the raceNumber if the user is older than 18 and registered early
}

if (age > 18 && registeredEarly) { // If the user is older than 18 and registered early
  console.log(`Your race will begin at 9:30 am & your race number is ${raceNumber}`);
} else if (age > 18 && !registeredEarly) { // If the user is older than 18 and NOT registered early
  console.log(`Your race will begin at 11:00 am & your race number is ${raceNumber}`);
} else if (age < 18) { // If the user is younger than 18
  console.log(`Your race will begin at 12:30 pm & your race number is ${raceNumber}`);
} else { // If the user is exactly 18 years old
  console.log(`Your are 18 years old? Please see the registration desk.`);
}

