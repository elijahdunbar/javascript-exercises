const convertToCelsius = function(fTemp) {
  const cTemp = Number(((fTemp - 32) * (5 / 9)).toFixed(1));
  return cTemp;
};

const convertToFahrenheit = function(cTemp) {
  const fTemp = Number((cTemp * (9/5) + 32).toFixed(1));
  return fTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
