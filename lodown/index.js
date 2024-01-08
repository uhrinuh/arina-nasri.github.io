'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/**
 * identity: Function takes in an input value and returns the value unchanged.
 * @param {*} value: Function takes in any input value.
 * @returns {*} value : Function returns input value unchanged.
 */

function identity(value){
    return value;
};
module.exports.each = identity;

/**
 * typeOf: Function takes in an input value and returns the typeof the value as a string.
 * @param {*} value: Function takes in any input value.
 * @returns {*}: Function returns what type of value the value is as a string.
 */

function typeOf(value){
    if (typeof value === "string"){
        return "string";
    } else if (Array.isArray(value) === true){
        return "array";
    } else if (typeof value === "undefined"){
        return "undefined";
    } else if (typeof value === "number"){
        return "number";
    } else if (value === null){
        return "null";
    } else if (typeof value === "function"){
        return "function";
    } else if (typeof value === "boolean"){
        return "boolean";
    } else if (typeof value === "object"){
        return "object";
    }
}
module.exports.each = typeOf;

/**
 * first: Function takes in an array and a number and returns elements of the array or an empty array depending on its if statements.
 * @param {array} array: Function takes in an array.
 * @param {number} number: Function takes in any number value.
 * @returns: If the array value isn't an array or the number is greater than 0, it returns an empty array.
 * If the number value isn't defined or isn't a number, it returns the first value of the array/
 * If the number is greater than the array length, it returns an array.
 * Else, it returns the first number items in array.
 */

function first(array, number){
    if (Array.isArray(array) === false){
        return [];
    } if (number === undefined || number === NaN){
        return array[0];
    } if (number < 0){
        return [];
    } if (number > array.length){
        return array;
    } else {
        return array.slice(0, number);
    }
  }

module.exports.each = first;

/**
 * last: Function takes in an array and a number and returns elements of the array or an empty array depending on its if statements.
 * @param {Array} array: Function takes in an array.
 * @param {Number} number: Function takes in any number value.
 * @returns If the array isn't an array or the number is greater than 0, it returns an empty array.
 * If the number isn't defined or isn't a number, it returns the last value of the array.
 * If the number is greater than the array, it returns the array.
 * Else, it returns the last number items of array.
 */

function last(array, number){
    if (Array.isArray(array) === false){
        return [];
    } if (number === undefined || number === NaN){
        return array[array.length - 1];
    } if (number < 0){
        return [];
    } if (number > array.length){
        return array;
    } else {
        return array.slice(1, array[number.length - 1])
    }
}
module.exports.each = last;

/**
 * indexOf: Function loops through an array to find the index a value is found, if it isn't found it returns -1.
 * @param {value} array: Function takes in any array.
 * @param {*} value: Function takes in any input value.
 * @returns If the value is found in the array, return the index it is found at.
 * Else, return -1.
 */

function indexOf(array, value){
    // when given a value
    // return the index where we first see that value FORGET the other times its there after the first time
    // if that value doesn't exist in the array
    // return -1

    // iterate through array
    for (var i = 0; i < array.length; i++){
        // if value is found, return index
        if (array[i] === value){
            return i;
        }
    }
    // if value is not found, return -1
    return -1;
};
module.exports.each = indexOf;

/**
 * contains: Function takes in an array and a value and loops through the array looking for the value.
 * @param {value} array: Function takes in any array.
 * @param {*} value: Function takes in any input value.
 * @returns If the array contains the value, return true.
 * Else, return false.
 */

function contains(array, value){
    // if array contains value
    // return true
    // otherwise
    // return false
    // what if there Is no value period

    for (var i = 0; i < array.length; i++){
        if (array[i] === value){
            return true;
        }
    }
    return false;
}
module.exports.each = contains;

/**
 * unique: Takes in an array and aims to delete the duplicates inside the array.
 * @param {Array} array: Function takes in any array
 * @returns the array with all original values only.
 */

function unique(array){
    return [...new Set(array)];
}
module.exports.each = unique;

/**
 * filter: For each element in the array, a callback function is called and it returns a new array of elements for which calling the function returned true.
 * @param {Array} array: Function takes in an array.
 * @param {function} func: Function takes in a callback function intended to be invoked on each value to create a modified result.
 * @returns Function returns a new array populated by the results of invoking the callback function on each value in the array.
 */

function filter(array, func){
    // for each element in array
    // call function passing the arguments element, index, array
    // return a new array of elements for which calling function returned true
    var newArray = [];
    _.each(array, function(element, index, array){
        if(func(element, index, array)){
            newArray.push(element);
        }
    });
    return newArray;
}
module.exports.each = filter;

/**
 * reject: For each element in the array, a callback function is called and it returns a new array of elements for which calling the function returned false.
 * @param {Array} array: Function takes in an array.
 * @param {function} func: Function takes in a callback function intended to be invoked on each value to create a modified result.
 * @returns Function returns a new array populated by the results of invoking the callback function on each value in the array.
 */

function reject(array, func){
    var newArray = [];
    _.each(array, function(element, index, array){
        if(func(element, index, array) === false){
            newArray.push(element);
        }
    });
    return newArray;
}
module.exports.each = reject;

/**
 * partition: For each element in the array, a callback function is called and it returns two arrays: one for which the function returned something truthy and the other for when something returned falsey.
 * @param {Array} array: Function takes in an array.
 * @param {function} func: Function takes in a callback function intended to be invoked on each value to create a modified result.
 * @returns An array that has 2 arrays: one array of truthy values and another array full of falsy values.
 */

function partition(array, func){
    var truthy = [];
    var falsy = [];
    for (var i = 0; i < array.length; i++){
      if (func(array[i], i, array)){
        truthy.push(array[i]);
      } else {
        falsy.push(array[i]);
      }
    }
    return [truthy, falsy];
  }
  module.exports.each = partition;

/**
 * pluck: Takes in an array of objects and a key to return the values of each key.
 * @param {Array} array: Function takes in an array of objects.
 * @param {Key} property: Function takes in the key of each object
 * @returns An array containing the value of each key for every element in array.
 */

  function pluck(array, property){
    let object = _.map(array, function(object){
        return object[property];
    });
    return object;
}
module.exports.each = pluck;

/**
 * map: Function takes in a collection and a callback function.
 * It invokes callback on each item in collection and stores result in output array.
 * @param {Array or object} collection: Function takes in either an array or object intended as a collection.
 * @param {function} func: Function takes in a callback function intended to be invoked on each value to create a modified result.
 * @returns {Array}: Function returns an array populated by the results of invoking the callback function on each value in collection.
 */

function map(collection, func){
    // create output array
    const output = [];
    // determine if collection is an array
    if (Array.isArray(collection)){
        // iterate using a for loop
        for (let i = 0; i < collection.length; i++){
            // invoke callback and store result in a variable
            // func(/current element/, /current index/, /collection/)
            let result = func(collection[i], i, collection);
            // push in result into output
            output.push(result);
        }
    } else { // else its an object
        // iterate using a for in loop
        for (let key in collection){
            // invoke callback and store result in a variable
            // func(/current value/, /current key/, /collection/)
            let result = func(collection[key], key, collection);
            // push in result into output
            output.push(result);
        }
    }
    // return output
    return output;
}
module.exports.each = map;

/**
 * every: Function takes in a collection and a callback function.
 * It invokes callback on each item in collection and a boolean value dependent on the current index/value in the collection.
 * @param {Array or object} collection: Function takes in either an array or object intended as a collection.
 * @param {function} func: Function takes in a callback function intended to be invoked on each value to create a modified result.
 * @returns a boolean value dependent on each item in collection and returns false if the function is undefined/defined and the current item in the collection is falsy or true if the current item is truthy.
 */

function every(collection, func){
    // determine if func was not provided
    if (func === undefined){
        // determine if array
        if (Array.isArray(collection)){
            // iterate through array
            for (let i = 0; i < collection.length; i++){
                // determine if current item is NOT truthy
                // ! reverses the logic aka if collection[i] is falsey
                if (!collection[i]){
                    // return false
                    return false;
                }
            }
        } else { // else its an object
            // iterate through object
            for (let key in collection){
                // same logic as the above if statement
                if (!collection[key]){
                    // return false
                    return false;
                }
            }
        }
    } else { // else it was provided
        // determine if array
        if (Array.isArray(collection)){
            // iterate through array
            for (let i = 0; i < collection.length; i++){
                // determine if the result of invoking the callback is NOT truthy
                // is the individual item in the array 
                if (func(collection[i], i, collection) === false){
                    // return false
                    return false;
                }
            }
        } else { // else it's an object
            // iterate through object
            for (let key in collection){
                // determine if the result of invoking the callback is NOT truthy
                // is the individual item in the object
                if (func(collection[key], key, collection) === false){
                    // return false
                    return false;
                }
            }
        }
    }
    // if everything ends up being truthy aka no falseys we have to return true
    return true;
}
module.exports.each = every;

/**
 * some: Function takes in a collection and a callback function.
 * It invokes callback on each item in collection and a boolean value dependent on the current index/value in the collection.
 * @param {Array or object} collection: Function takes in either an array or object intended as a collection.
 * @param {function} func: Function takes in a callback function intended to be invoked on each value to create a modified result.
 * @returns If the function is undefined/defined and the collection contains the index or key, it returns true, otherwise it returns false.
 */

function some(collection, func){
    // determine if func was not provided
    if (func === undefined){
        // determine if array
        if (Array.isArray(collection)){
            // iterate through array
            for (let i = 0; i < collection.length; i++){
                if (collection[i]){
                    return true;
                }
            }
        } else {
            for (let key in collection){
                if (collection[key]){
                    return true;
                }
            }
        }
    } else {
        if (Array.isArray(collection)){
            for (let i = 0; i < collection.length; i++){
                if (func(collection[i], i, collection === true)){
                    return true;
                }
            }
        } else {
            for (let key in collection){
                if (func(collection[key], key, collection) === true){
                    return true;
                }
            }
        }
    }
    return false;
}
module.exports.each = some;

/**
 * reduce: Takes in an array, a callback function, and a seed to filter, map, and accumulate the values in the array to do something.
 * @param {Array} array: Function takes in an array.
 * @param {function} func: Function takes in a callback function intended to be invoked on each value to create a modified result.
 * @param {*} seed: Function takes in a seed value which is any value the function begins accumulating at.
 * @returns The callback function invoked on our output variable.
 */

function reduce(array, func, seed){
    // initialize an output variable (what we are accumulating)
    let output;
    if (seed === undefined){
        output = array[0];
        for (let i = 1; i < array.length; i++){
            // reassign output to result of invoking callback function
            output = func(output, array[i], i); // func(output), /current item/, /current index/
        }
    } else { // else there is a seed value
        output = seed;
        for (let i = 0; i < array.length; i++){
            output = func(output, array[i], i)
        }
    }
    return output;
}
module.exports.each = reduce;

/**
 * extend: takes in multiple objects with however many objects there are copied onto the original one.
 * @param {object} target: Function takes in an object.
 * @param  {...any} objects: Function takes in any number of objects.
 * @returns The target object with the objects after it copied onto it.
 */

function extend(target, ...objects){
    for (let i = 0; i < objects.length; i++){
        Object.assign(target, objects[i]);
    }
    return target;
}
module.exports.each = extend;