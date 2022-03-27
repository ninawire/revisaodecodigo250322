/*The forecast today is 293 Kelvin. To start, create a variable named kelvin, and set it equal to 293. The value saved to kelvin will stay constant. Choose the variable type with this in mind.*/
const kelvin = 293;
/*Celsius is similar to Kelvin — the only difference is that Celsius is 273 degrees less than Kelvin. Let’s convert Kelvin to Celsius by subtracting 273 from the kelvin variable. Store the result in another variable, named celsius.*/
let celsius = kelvin - 273;
/*Use this equation to calculate Fahrenheit, then store the answer in a variable named fahrenheit. Fahrenheit = Celsius * (9/5) + 32. In the next step we will round the number saved to fahrenheit. Choose the variable type that allows you to change its value.*/
let fahrenheit = celsius * (9/5) + 32;
/*When you convert from Celsius to Fahrenheit, you often get a decimal number. Use the .floor() method from the built-in Math object to round down the Fahrenheit temperature. Save the result to the fahrenheit variable.*/
fahrenheit = Math.floor(fahrenheit);
/*Use console.log and string interpolation to log the temperature in fahrenheit.*/
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
/*Great work! Kelvin can now publish his forecasts in Celsius and Fahrenheit. Convert celsius to the Newton scale using the equatio Newton = Celsius * (33/100)*/
let newton = celsius * (33/100);
/*Round down the Newton temperature using the .floor() method. Use console.log and string interpolation to log the temperature in newton to the console*/
newton = Math.floor(newton);
console.log(`The temperature is now ${newton} degrees Newton.`);