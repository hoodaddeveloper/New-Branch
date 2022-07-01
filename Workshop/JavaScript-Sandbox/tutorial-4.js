// Else If Statements

let season = 'spring';

if (season === 'spring') {
  console.log('It\'s spring! The trees are budding!');
} else if (season === 'winter') {
  console.log('It\'s winter! Everything is covered in snow.');
} else if (season === 'fall') {
  console.log('It\'s fall! Leaves are falling!');
} else if (season === 'summer') {
  console.log('It\'s sunny and warm because it\'s summer!');
} else {
  console.log('Invalid season.');
}

// Examples from freeCodeCamp

function testEqual(val) {
  if (val == 12) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

console.log(testEqual(10)); // The answer should be "Equal" or "Not Equal"

// Other example from freeCodeCamp

function testStrict(val) {
  if (val === 7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

console.log(testStrict(7)); // The answer should be "Equal" or "Not Equal"

// Other example from freeCodeCamp for comparing two different values

function compareEquality(a, b) {
  if (a === b) { // Change this line or the values in the console.log
    return "Equal";
  }
  return "Not Equal";
}

console.log(compareEquality(10, 10)); // The answer should be "Equal" or "Not Equal"

// Other example from freeCodeCamp using "&&" logical Ooerator

function testLogicalAnd(val) {

  if (val <= 50 && val >= 25 ) {
      return "Yes";
    }
  return "No";
}

testLogicalAnd(10);

// The switch keyword

