const add = function (firstNumber, secondNumber) {
  return firstNumber + secondNumber;
};

const subtract = function (firstNumber, secondNumber) {
  return firstNumber - secondNumber;
};

const sum = function (arr) {
  let sum = 0;
  arr.forEach((item) => {
    sum += item;
  });
  return sum;
};

const multiply = function (arr) {
  return arr.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
};

const power = function (firstNumber, secondNumber) {
  return Math.pow(firstNumber, secondNumber);
};

const factorial = function (number) {
  let fact = 1;
  for (let index = 1; index <= number; index++) {
    fact = fact * index;
  }
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
