// var, let, const

var fname = "Hasan"; // var is a global variable
var fname = "Ali"; // changed the value of var to "Ali"
fname = "Samad"; // changed the value of fname to "Samad"

let age = "40"; // let is a local variable
// let age = "40"; // error: can't change the value of let
age = "50"; // changed the value of age to "50"

const isMarried = true; // const is a constant variable
// const isMarried = true; // error: can't change the value of const
// isMarried = false; // error: can't change the value of isMarried

console.log(fname);
console.log(age);
console.log(isMarried);

// Object //

let myObject = {
  marke: "BMW",
  model: "X7",
  year: 2022,
  motor: {
    type: "V8",
    horsepower: "500",
    torque: "500",
    adress: ["Robert-Koch-Strasse", "Berlin", "Germany"]
  },
  color: "white",
  price: "gratis!",
  isNew: true,
}

console.log(myObject);