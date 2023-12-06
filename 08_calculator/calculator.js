const add = function(x, y) {
  return x + y;
};

const subtract = function(x, y) {
  return x - y;
};

const sum = function(arr) {
	return arr.reduce((total, num) => total + num, 0);
};

const multiply = function(arr) {
	return arr.reduce((total, num) => total * num, 1);
};

const power = function(x, y) {
	return x ** y;
};

const factorial = function(num) {
	let total = 1
  while (num > 0) {
    total *= num--;
  } return total;
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
