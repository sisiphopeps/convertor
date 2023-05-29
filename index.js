let display = document.querySelector(".results")
//conversion function from Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
 let temp = (temperature-32)*5/9;
   let results = document.getElementById("#output");
   output.value = temp
}

//conversion function from Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
   let temp = (temperature*9/5)+32;
   let results = document.getElementById("#output");
   output.value = temp
}

// Prompt the user for input
let temperature = parseFloat(prompt("Enter the temperature:"));
let conversionType = prompt("Choose the conversion type: (Celsius to Fahrenheit or Fahrenheit to Celsius)");

if (conversionType.toLowerCase() === "celsius to fahrenheit") {
    celsiusToFahrenheit();
    // return fahrenheit.value

} else if (conversionType.toLowerCase() === "fahrenheit to celsius") {
    fahrenheitToCelsius();
} else {
  alert("Invalid conversion type.");
}