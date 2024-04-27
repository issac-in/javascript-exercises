const convertToCelsius = function(degF) {
  return +((degF-32) * (5/9)).toFixed(1);
};

const convertToFahrenheit = function(degC) {
  return +(degC * (9/5) + 32).toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
