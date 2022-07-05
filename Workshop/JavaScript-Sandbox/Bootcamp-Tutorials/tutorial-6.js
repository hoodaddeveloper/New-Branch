/////     Accessing Object Properties with Dot Notation     /////

// Example 1

const myObj = {
  prop1: "val1",
  prop2: "val2"
};

const prop1val = myObj.prop1;
const prop2val = myObj.prop2;

// Example 2

const testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

const hatValue = testObj.hat;
const shirtValue = testObj.shirt;

/////     Accessing Object Properties with Bracket Notation     /////

// Example 1

const myObj2 = {
  "Space Name": "Kirk",
  "More Space": "Spock",
  "NoSpace": "USS Enterprise"
};

myObj2["Space Name"]; // Kirk
myObj2['More Space']; // Spock
myObj2["NoSpace"]; // USS Enterprise

// Example 2

const testObj2 = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

const entreeValue = testObj2["an entree"]; // "hamburger"
const drinkValue = testObj2["the drink"]; // "water"

/////     Updating Object Properties     /////

const ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

ourDog.name = ["Jax"]; // "Jax" is now the value of ourDog.name
// or //
ourDog["name"] = ["Buster"]; // "Buster" is now the value of ourDog.name

console.log(ourDog["name"]); 
// or //
console.log(ourDog.name);

/////     Add New Properties to Objects    /////

const myCat = {
  name: "Lusy",
  age: 2,
  color: "white"
};

myCat.gender = "male"; // adding "gender" to my object
// or //
myCat["favotite-food"] = "fish"; // adding "favotite-food" to my object

console.log(myCat)