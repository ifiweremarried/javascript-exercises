const convertToCelsius = function(tempF) {
    let celsius = (tempF - 32) * 5/9; 
    return celsius.toFixed(1); 
};

const convertToFahrenheit = function(tempC) {
    let fahrenheit = (tempC * 9/5) + 32; 
    if (fahrenheit % 1 != 0) {
      fahrenheit = fahrenheit.toFixed(1)
    }; 
    return fahrenheit; 
};

// console.log(convertToCelsius(-100));
console.log(convertToFahrenheit(73.2));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
