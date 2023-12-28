//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    var array = [];
    for (var key in object){
        array.push(object[key]);
    }
    return array;
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    // we have an object
    // the object has key/value pairs
    // return the keys in a string each separated with a space
    var array = [];
    for (var key in object){
        array.push(key);
    }
    return array.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    // we have an object
    // return all of its string values in a string each separated with a space
    var array = [];
    for (var key in object){
        if (typeof object[key] === "string"){
            array.push(object[key]);
        }
    }
    return array.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    // should take one argument and return "array" if its an array and "object" if its an object
    if (Array.isArray(collection)){
        return "array";
    } else {
        return "object";
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    // should take a string of one word
    // return the word with its first letter capitalized
    // create substring of og string thats not the first letter
    // add it to ^^^^^
    var upperCasedString = string[0].toUpperCase();
    var sliced = string.slice(1);
    var newString = upperCasedString + sliced;
    return newString;
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    // should take a string of words
    // return a string with all the words capitalized
    // "one two three four" ONE STRING with multiple words
    // at the first index which would be O go til the end of the string UP ONE

    // split string into array
    // make an empty array
    // iterate through the array and do the whole capitalizing thing
    // push it into the array
    // join the array into a string
    // return it
    var split = string.split(" ");
    var array = [];
    for (i = 0; i < split.length; i++){
        var upperCasedString = split[i][0].toUpperCase();
        var sliced = split[i].slice(1);
        var newString = upperCasedString + sliced;
        array.push(newString);
    }
    var arrayToString = array.join(" ");
    return arrayToString;
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    // should take an object with a name property 
    // return "Welcome <Name>!"
    var array = [];
    for (var key in object){
        var newestObject = object[key][0].toUpperCase();
        var sliced = object[key].slice(1);
        var hopeThisWorks = newestObject + sliced;
        array.push(hopeThisWorks);
        var arrayToString = array.join(" ");
        return "Welcome " + arrayToString + "!";
    }
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    // should take an object with a name and a species
    // return "<Name> is a <Species>"
      // get all values
  var objValues = Object.values(object);
  // getting each value individually
  // taking the first index of the value and making it uppercase while also slicing it after the first letter
  var array = objValues.map(value => value[0].toUpperCase() + value.slice(1));
  return array[0] + " is a " + array[1];
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    // Should take an object, if this object has a noises array return 
    // them as a string separated by a space
    // if there are no noises return 'there are no noises'"
  // if this object has a noises arrray
  if (Array.isArray(object.noises) && object.noises.length !== 0){
    // return them as a string separated by a space
    return object.noises.join(" ");
  } if (Array.isArray(object.noises) && object.noises.length === 0){
    return "there are no noises";
  }   else { // if there are no noises
    // return there are no noises
    return "there are no noises";
  }
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    // Should take a string of words and a word
    // return true if <word> is in <string of words>
    // otherwise return false.
    if (string.includes(word)){
        return true;
    } else {
        return false;
    }
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
   // Should take a name and an object
   // add the name to the object's friends array 
   // return the object
   object.friends.push(name);
   return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    // Should take a name and an object
    // return true if <name> is inside the object property at the friends value
    // false otherwise
    if (object && object.friends && Array.isArray(object.friends)) {
      return object.friends.includes(name);
    } else {
      return false;
    }
  }  

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
    // should take a name and a list of people 
    // and return a list of all the names that <name> is not friends with
    // if we input "Jimmy" it should return ["Bob"]
    // if we input "Bob" it should return ["Jimmy", "Liza", "Sara"]
    // if we input "Sara" it should return ["Bob", "Liza"]
    // if we input "Liza" it should return ["Bob", "Sara"]
  for (var i = 0; i < array; i++){
    // if the name we put in, gives us the name
    if (array[i].name === name){
      // we will look at the names's friends
      var friends = array[i].friends;
      } // return who they aren't friends with
      var notFriends = [];
      for (var j = 0; j < friends.length; i++){
        if (friends[j] !== name){
          notFriends.push(friends[j]);
        }
      }
    }
  return notFriends;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    // Should take an object, a key and a value. 
    // Should update the property <key> on <object> with new <value>. 
    // If <key> does not exist on <object> create it."
    for (var key in object){
        if (object[key] = value){
            
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    // Should take an object and an array of strings. 
    // Should remove any properties on <object> that are listed in <array>
    for (var key in object){
        // if property is in the array
        if (Array.isArray(key[array])){
        // remove it
        array.splice(1);
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    
 }

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}