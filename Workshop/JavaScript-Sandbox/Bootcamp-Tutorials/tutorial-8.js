///// Function Expressions /////

const plantNeedsWater = function (day) {
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
};

plantNeedsWater();
console.log(plantNeedsWater('Wednesday')); // "true"

///// Arrow Functions /////

