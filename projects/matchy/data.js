/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal = {};
animal.species = "tiger";
animal["name"] = "Raja";
animal.noises = [];
console.log(animal);


//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// create a variable named noises and assign it to an empty array
var noises = [];
// using bracket notation give noises its first element = a string representing a sound your animal might make
noises[0] = "roar";
// using an array function, add another noise to the end of noises
noises.push("rawr");
// using an array function that placed an element to the beginning of the array, add another noise to noises
noises.unshift("meow");
// using bracket notation, add another element to the end of noises
// dont hard code
noises[noises.length] = "grr";
// console.log the length of noises
console.log(noises.length);
// console.log the last element in noises
// dont hard code
console.log(noises.length - 1);
// console.log the whole array
console.log(noises);


//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
// using bracket notation, assign the noises property on animal to our new noises array
animal["noises"] = noises;
// using any syntax add another noise to the noises property on "animal"
animal.noises.push("whine");


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 * 
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
// create a variable named animals and assign it to an empty array
var animals = [];
// push our animal that we created to animals
animals.push(animal);
// console.log animals
console.log(animals);
// create a variable called duck ans assign it to the data:
var duck = {
  species: "duck",
  name: "Jerome",
  noises: ["quack", "honk", "sneeze", "woosh"]
};
// push duck to animals
animals.push(duck);
// console log animals
console.log(animals);
// create two more animal objects with a species, a name, and at least two sounds and add each of them to animals
var dog = {
  species: "dog",
  name: "Max",
  noises: ["woof", "ruff"]
};
animals.push(dog);
var cat = {
  species: "cat",
  name: "Pishi",
  noises: ["meow", "hiss"]
};
animals.push(cat);
// console.log animals and console.log the length of animals
console.log(animals);
console.log(animals.length);


//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// choose a data structure for this list of friends
  // array
// write a comment in my code that explains why you chose this data structure
  // arrays hold similar data values so if i am only listing certain friends each animal has, they are all the same data structure so this is the easiest structure
// create a variable called "friends" and assign it to the data structure you chose
var friends = [];
// write a function called getRandom that takes our animals array and returns a random index of the input array using math.random
function getRandom(randomIndex){
  return Math.random();
}
// using a random index from this function that you just created, get a random animal and add its name to friends

// console.log friends
console.log(friends);
// using bracket notation add the friends list as a property also named friends on one of the animals in the animals array

// console.log my work

/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}