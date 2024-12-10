function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

let celsius = 25;
let fahrenheit = celsiusToFahrenheit(celsius);
console.log(`${celsius}°C es igual a ${fahrenheit}°F`);

fahrenheit = 77;
celsius = fahrenheitToCelsius(fahrenheit);
console.log(`${fahrenheit}°F es igual a ${celsius}°C`);
