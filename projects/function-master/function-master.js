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
    
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    // Should take an object, if this object has a noises array return 
    // them as a string separated by a space
    // if there are no noises return 'there are no noises'"

  // if this object has a noises arrray
  if (Array.isArray(object.noises)){
    // return them as a string separated by a space
    return object.noises.join(" ")
  } else { // if there are no noises
    // return there are no noises
    return "there are no noises"
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
   // return true if <name> is a friend of <object> 
   // false otherwise
    if (object.friends.includes(name)){
        return true;
    } else {
        return false;
    }
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {

}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {

}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {

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