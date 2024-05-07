const add = function(operand1, operand2) {
	return operand1 + operand2;
};

const subtract = function(operand1, operand2) {
	return operand1 - operand2;
};

const sum = function(numArray) {
	return numArray.reduce((sum,currentNum) => sum += currentNum, 0);
};

const multiply = function(numArray) {
  return numArray.reduce((product, currentNum) => product *= currentNum, 1);
};

const power = function(base, exponent) {
	return base ** exponent;
};

const factorial = function(num) {
  let factorial = 1;
  for (let i = num; i > 0; i--) {
    factorial *= i;    
  }
  return factorial;
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
