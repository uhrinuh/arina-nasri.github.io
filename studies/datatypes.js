/**
 * DATATYPES:
 * 
 * 0. To be able to operate on variables, you need to know something about what type of data it is.
 * Javascript has different datatypes that encompass all the sorts of data necessary to code.
 * 
 * 1. Number: A number value.
 * 
 * 2. String: A series of characters that are written with quotes.
 * 
 * 3. Boolean: true or false values
 * 
 * 4. Array: A list-like complex data type that is used to store similar data values.
 * Stored in [].
 * 
 * 5. Object: Collect data in the form of {"key": value} pairs called properties
 * 
 * 6. Function: reusable blocks of code that accepts inputs and outputs and processes those inputs and returns a new data value
 * 
 * 7. undefined: a variable without a value
 * 
 * 8. null: represents the intentional absence of any object value.
 * Treated as falsy for boolean operations.
 * 
 * 9. NaN: represents not-a-number in a function
 * 
 * 10. Infinity: a numeric value representing infinity, aka greater than any other number
 * -Infinity: a number value representing negative infinity.
 * Any positive value * negative infinity = negative infinity.
 * Any negative value * negative infinity = positive infinity.
 * Any positive value / negative infinity = negative zero.
 * Any negative value / negative infinity = positive zero.
 * Zero * negative infinity = NaN
 * NaN * negative infinity = NaN
 * 
 * 11. What is the difference between primitive/simple and complex data types?
 * Simple data types are data types that have no properties and methods, whereas complex data types do.
 * Simple data types are like strings, numbers, booleans.
 * Complex data types are like arrays, functions, and objects
 * 
 * 12. Primitive values are passed to a function BY COPY, complex values are BY REFERENCE. 
 * What does that mean, and how are they different?
 * Javascript is always passed by value, but when a variable refers to an object (including arrays), the "value" is a reference to the object.
 * Changing the value of a variable never changes the underlying primitive or object, it just points the variabke to a new primitive or object.
 * However, changing a property of an object referenced by a variable does change the underlying object.
 * Pass by value means that a copy of the actual parameter's value is made in memory aka the function recieves a copy of the variable, which is independent of the originally passed variable.
 * Pass by reference does not create a new space in the memory, instead we pass the reference of ther actual parameter which means the function can access the original value of the variable.
 * All changes made inside the function affect the original variable as well.
 * 
 */

// 1. Number //
let number = 16; // the variable number is set to the number value of 16

// 2. String //
let favHockeyTeam = "Ducks"; // the variable favHockeyTeam is set to a string called "Ducks"

// 3. Boolean //
favHockeyTeam === "Blackhawks"; // this will return false since favHockeyTeam was already set to the value of "Ducks"
1 === 1; // this will return true since 1 strictly equals 1

// 4. Array //
let arinasFavHockeyTeams = ["Ducks", "Canucks", "Devils"]; // this is an example of an array
// the variable arinasFavHockeyTeams is set to an array full of strings

// 5. Object // 
let arinasFavHockeyTeam = {
    team: "Ducks",
    favPlayer: "Lukas Dostal",
    favTradedPlayer: "Jamie Drysdale"
}
// arinasFavHockeyTeam is set to an object full of keys team, favPlayer, and favTradedPlayer and each key has a value

// 6. Function //
// function hockey takes one parameter, string
function hockey(string){
    // if passed in string = "Ducks"
    if (string === "Ducks"){
        // print "You got a good fav hockey team!" to the console
        console.log("You got a good fav hockey team!")
        // if passed in string is anything else
    } else {
        // print "Get a better favorite team!"
        console.log("Get a better favorite team!")
    }
}
// funciton is invoked with the argument "Ducks" meaning "You got a good fav hockey team!" is printed
hockey("Ducks");

// 7. undefined //
let arina; // this is a variable with no value meaning the value is undefined

// 8. null //
var variable = null;
// checks if the variable is a truthy value
if (variable){
    console.log("variable is not null");
    // null is falsy so the else statement is printed
} else {
    console.log("variable is null")
}

// 9. NaN //
function valueIsNaN(x) {
    // NaN is the only value that compares unequal to itself so you can do x !== x to perform a self-comparison
    return x !== x;
}
// to tell if a valye is NaN, you can use Number.isNaN() or isNan()
console.log(valueIsNaN(1)); // false
console.log(valueIsNaN(NaN)); // true
console.log(valueIsNaN(Number.NaN)); // true

// 10. Infinity and -Infinity //
console.log(Infinity); // Infinity
console.log(Infinity + 1); // Infinity 
console.log(1 / Infinity); // 0
console.log(1 * -Infinity); // -Infinity
console.log(-1 * -Infinity); // Infinity
console.log(1 / -Infinity); // -0
console.log(-1 / -Infinity); // 0
console.log(0 * -Infinity); // NaN
console.log(NaN * -Infinity); // NaN

// 11. What is the difference between primitive/simple and complex data types? //
// simple data types
var string = "string" // string
var num = 16; // number
(1 === 1); // boolean, true

// complex data types
var array = ["random", "stuff"]; // array
var arinaNasri = {
    age: 22,
    bday: "February 16, 2001",
    favFood: "rice"
} // object
function add(a, b){
    return a + b;
}
add(1, 2); // function, 3

// 12. Primitive values are passed to a function BY COPY, complex values are BY REFERENCE. What does that mean, and how are they different? //
// by copy
let num1 = 70 // num1 is set to the value of 70
let num2 = num1 // num2 is set to num1's value aka 70

console.log(num1) // 70
console.log(num2) // 70

num1 = 40 // we changed num1, but num2 stays the same because it was already set to 70 before and we are only changing num1

console.log(num1) // 40
console.log(num2) // 70

// by reference
// we have a variable called arinasFavoriteHockeyTeams that includes an array with strings
let arinasFavoriteHockeyTeams = ["Ducks", "Canucks", "Devils"];

// this function allHockeyTeamsArinaLike takes in a parameter array and pushes in string "Kraken"
function allHockeyTeamsArinaLikes(array) { 
  array.push('Kraken')
  console.log(array); 
} 

// check to see what arinasFavoriteHockeyTeams equals 
console.log(arinasFavoriteHockeyTeams); // ["Ducks", "Canucks", "Devils"]
// invoke allHockeyTeamsArinaLikes by using arinasFavoriteHockeyTeams as the arg
allHockeyTeamsArinaLikes(arinasFavoriteHockeyTeams); // ["Ducks", "Canucks", "Devils", "Kraken"]
// the function pushed in "Kraken" meaning it also changed the original array
console.log(arinasFavoriteHockeyTeams); // ["Ducks", "Canucks", "Devils", "Kraken"]