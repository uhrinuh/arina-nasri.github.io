/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

// const { animal } = require("./data");

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function search(animals, name){
    for (var i = 0; i < animals.length; i++){
      if (animals[i].name === name){
        return animals[i];
      }
    }
    return null;
  }

//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// write a function declaration called replace with a signature of animals, name, replacement
// animals = array of animals
// name = string representing the name of an animal on which to perform a search
// replacement = an object that represents the replacement animal
function replace(animals, name, replacement){
  for (var i = 0; i < animals.length; i++){
    // if an animal with the name exists in the animals array
    if (animals[i].name === name){
      // replace its entire object with the replacement object
      return animals[i] = replacement;
    }
  }
  return null;
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// write a function decalation called remove with a signature of remove(animals, name)
// animals = array of animals
// name = name of an animal on which to perform a search
function remove(animals, name){
  for (var i = 0; i < animals.length; i++){
    if (animals[i].name === name){
      // remove it
      animals.splice(i, 1);
    }
  }
  return null;
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// write a function declaration called add with a signature of add(animals, animal)
// animals = an array or animals
// animal = an object representing a new animal to be added
function add(animals, animal){
  // if animal has a name property with a length > 0
  if (animal.name.length > 0){
    // if animal has a species property with a length > 0
    if (animal.species.length > 0){
      // if animal has a unique name
      if (!animals.some(animalObj => animalObj.name === animal.name)){
        // add animal to animals array
        animals.push(animal);
      }
    }
  }
}

/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
