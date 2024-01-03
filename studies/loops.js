/**
 * LOOPS:
 * 
 * 0. Loops are computer programs that execute a set of instructions or a block of code a certain number of times without having to write it again until a certain condition is met.
 * They are extremely handy for iterating over collections of data.
 * Loops help us pull out the values of a collection to work with them, one by one.
 * Loops let your code execute one or more statements as many times as desired.
 * 
 * 1. While, for, and for-in loops
 * WHILE LOOPS
 * While loops states a condition that while true, will continue to access the block of code in the body of the while-loop.
 * These loops are set up differently than for and for-in loops because for and for-in loops use the keyword for, however while does not.
 * Usually, while loops use the keyword count that must be declared before the while loop is used.
 * 
 * FOR LOOPS
 * For loops are used to iterate/loop through an array.
 * These loops repeat until a specified condition evaluates to false.
 * Syntax:
 * for (start; stop; update){
 *      statement;
 * }
 * 
 * FOR-IN LOOPS
 * For-in loops pulls out all the keys of an object, one by one.
 * This allows you to use the key to get the value in the object.
 * Syntax:
 * for (var key in object){
 *      statement;
 * }
 * 
 * 2. Be able to loop any number of times, forward counting up to some limit, backward counting down to 0
 * To loop forward counting up to some limit, you change the syntax of the for loop to start it at 0, stop it at whatever number, and update it by incrimiating up by whatever number.
 * To loop backward counting down to 0, you change the syntax of the for loop to start it at whatever number, stop it at i >= 0, and update it by decrimating down by whatever number.
 * 
 * 3. Loop over an array, forwards and backwards
 * To loop over an array, you must use a for loop
 * To loop forward, you follow this syntax:
 * for (var i = 0; i < 5; i++){
 *      statement;
 * }
 * The variable can be called anything, but it must start at 0
 * It can stop wherever you want, but it must incrimate upwards
 * To loop backwards, you follow this syntax:
 * for (var i = array.length; i >= 0; i--){
 *      statement;
 * }
 * The variable can be called anything, but it must be set equal to the array's length.
 * It must stop at the 0 index of the array and decrimate downwards.
 * 
 * 4. Loop over an object
 * To loop over an object, you must use a for-in loop.
 */

// 1. While, for, and for-in loops //
// WHILE
var count = 0; // initialize out count variable set to 0
while (count < 7) { // while our count variable is greater than 0 but less than 7
    console.log(i); // print each value (0=6) to the console
    i++; // go up from 0 to 6 by one value
}

// FOR
for (var i = 0; i < 4; i++){ // starting at 0, stopping at 3, going up 1 for each iteration
    console.log("I love the DUCKS"); // print "I love the DUCKS" 4 times to the console
}

// FOR-IN
// initialize a variable called favDucksPlayer to an object that contains 3 key/value pairs
var favDucksPlayer = {
    name: "Jamie Drysdale",
    position: "Defense",
    draftPick: 6
}
for (var key in favDucksPlayer){ // using a for in loop to access each key in the object
    console.log(key); // prints each key (name, position, draftPick) to the console
    console.log(favDucksPlayer[key]); // prints each value (Jamie Drysdale, Defense, 6) to the console
}

// 2. Be able to loop any number of times, forward counting up to some limit, backward counting down to 0 //
for (var i = 0; i < 3; i++){ // starting at 0, going up to 2, incrimating by 1 each time
    console.log(i); // log i to the console
} // logs 0, 1, 2
  
for (var i = 2; i <= 0; i--){ // starting at 2, going down to 0, decrimate by 1 each time
    console.log(i); // log i to the console
 } // logs 2, 1, 0

// 3. Loop over an array, forwards and backwords //
// LOOPING OVER AN ARRAY FORWARDS
// initiralize a variable called ducksPlayers to an array that contains the names of players on the Ducks
var ducksPlayers = ["Jamie Drysdale", "Trevor Zegras", "Mason McTavish"];
for (var i = 0; i < ducksPlayers.length; i++){ // starting at the 0 index, stopping at the end of the array, going up 1 for each iteration
    console.log(ducksPlayers[i]); // print the array forwards to the console
}

// LOOPING OVER AN ARRAY BACKWARDS
// same start, stop, update formula
// however, you want the variable to begin at the end of the array and stop at the beginning and decrement by 1
for (var i = ducksPlayers.length - 1; i >= 0; i--){
    console.log(ducksPlayers[i]); // prints the array backwards to the console
}
// 4. Loop over an object //
// initialize a variable called object to an object that contains 3 key/value pairs 
var object = {
    name: "Arina",
    lastName: "Nasri",
    age: 22
}
// use a for-in loop to loop over the object
for (var key in object){ // this accesses each key in our object variable
    console.log(object[key]); // this prints each value (Arina, Nasri, 22) to the console
}