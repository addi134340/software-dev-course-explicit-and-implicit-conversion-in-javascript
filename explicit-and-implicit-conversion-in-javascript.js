/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


let result = Number("5") - 2; // I changed "5" to a number, just so that it was easier to understand that with was a math equation
console.log("The result is: " + result);

let isValid = Boolean(""); // the string "false" actually comes out to be true because it is a non-empty string. I ended up just making it an empy string.
if (isValid) {
    console.log("This is valid!");
} else {   //I added this because I assumed the code was supposed to output as false and it needed a worded output.
  console.log("This is NOT valid");
}

let age = "25";
let totalAge = Number(age) + 5; // I changed the age to a number
console.log("Total Age: " + totalAge);


//My own examples:

console.log("------Implicit Type Conversion------");

let catAge = "8";
let years = 4;
let combined = catAge + years;

console.log("Combinded (string + number): " + combined);

console.log("------Explicit Type Conversion------");

let bookPages = "436";
let bookPageNum = Number(bookPages);

console.log("Page string to page number: " + bookPageNum);

console.log("------Edge Case------");

let mysteryValue;
let mysteryResult = Number(mysteryValue);

console.log("Converting undefined to number: " + mysteryResult);