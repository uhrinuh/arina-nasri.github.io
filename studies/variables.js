/**
 * VARIABLES:
 * 
 * 0. Variables are named containers for data in Javascript. 
 * With variables, we are able to store values in memory and then do specific actions on those values whenever necessary.
 * Variables are able to hold simple data types and complex data types.
 * We create variables using declarative keywords...
 * 
 * 1. Declaration and assignment: To create a variable in Javascript, we must first DECLARE it using one of three declarative keywords: var, let, and const.
 * You do this by first typing out the declarative keyword, then the name you want to call your variable.
 * Each variable name is case sensitive, meaning name and Name would be different.
 * All variable names should be written in camelCase.
 * To assign a variable in Javascript, you simply type the variable name, followed by an equals sign, followed by the value you want to give it.
 * 
 * 2. Var, let, const: Var, let, and const are the three declarative keywords.
 * When Javascript was first created, the only way to create variables was by using var.
 * However, var was error-prone, specifically when it came to hoisting and being scoped to specific blocks of code, so let and const were created to eliminate those errors.
 * VAR
 * Reassignable? Yes
 * Scopes to functions? Yes
 * Scoped to if blocks? No
 * Scoped to loop blocks? No
 * 
 * LET
 * Reassignable? Yes
 * Hoisted? No
 * Scoped to functions? Yes
 * Scoped to if blocks? Yes
 * Scoped to loop blocks? Yes
 * 
 * CONST
 * Reassignable? No
 * Hoisted? No
 * Scoped to functions? Yes
 * Scoped to if blocks? Yes
 * Scoped to loop blocks? Yes
 * 
 * 3. Hoisting: 
 * Hoisting refers to the process where the interpreter appears to move the declaration of functions, variables, classes, or imports to the top of their scope, prior to execution of the code.
 * With var, you are allowed to reference the value before it is declared, but you can't do that with let and const.
 * AKA, let and const variables can only be referenced once they are declared.
 */

// 1. Declaration and assignment //

// Declaration
// declaring the variable lastName
var lastName;
// Assignment
// lastName is now assigned the stirng "Nasri" as it's value
lastName = "Nasri";

// 2. Var, let, and const //
var name = "Arina";
let age = 22;
const favHockeyTeam = "Ducks";
// Reassignable
name = "Ariana"; // This is okay!
age = 23; // This is okay!
favHockeyTeam = "Blackhawks" // This is not okay!

// var scoped to functions
function doSomething(){
  var favTvShow = "The Vampire Diaries";
  if (favTvShow === "The Vampire Diaries"){
    var greeting = "You have good taste!";
  }
  console.log(greeting);
}
doSomething(); // "You have good taste" will appear because greeting was invoked inside of the function, if I decided to invoke it outside the function it would not work, however if the variable was declared using let or const, it would've

// let and const are code blocked
// if statements
if (true){
  var a = 1;
  let b = 2;
  const c = 3;
}
console.log(a, b, c); // i am able to access a, but not b and c

// loop functions
for (var i = 0; i < 10; i++){
  var d = 100;
  let e = 200;
  const f = 300;
}
console.log(d, e, f) // i am able to access d, but not e and f

// 3. Hoisting //
  // You are allowed to reference a var value before it is declared, but you can't do that with let and const
  console.log(favMovie); // This is okay!, prints undefined
  var favMovie = "Spirited Away";
  console.log(favMovie); // prints "Spirited Away"
  
  console.log(favBook);
  console.log(favArtist);
  let favBook = "The Poppy War";
  const favArtist = "Lana Del Rey";
  // both of these will not work