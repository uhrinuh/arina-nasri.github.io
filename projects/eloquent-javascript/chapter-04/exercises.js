////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(start, end, step){
  let output = [];
  if (step === undefined){
    step = 1;
  }
  if (step < 0){
    return [];
  }
  if (start === end){
    return [];
  }
  if (step > 0){
    for (let i = start; i <= end; i += step){
      output.push(i);
    }
  }
  return output;
}

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(array) {
  let total = 0;
  for (let value of array) {
    total += value;
  }
  return total;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(array){
  var newArray = [];
  for(var i = array.length - 1; i >= 0; i--){
    newArray.push(array[i]);
  }
  return newArray;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(array){
  for(var i = 0; i < Math.floor(array.length / 2); i++){
    var old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
  return array;
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array) {
  let rest = null;
  for (let i = array.length-1; i >= 0; i--){
    rest = {value: array[i], rest: rest}; // reassigning rest to an object
  }
  return rest;
}
/*
// invoke arrayToList([10, 20, 30])
  // rest = null
  // for loop
    // i = 2
      // rest = {value: 30, rest: null}
    // i = 1
      // rest = {value: 20, rest: {value: 30, rest: null}}
    // i = 0
      // rest = {value: 10, rest: {value: 20, rest: {value: 30, rest: null}
    // return {value: 10, rest: {value: 20, rest: {value: 30, rest: null}
*/
////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/* let list1 = {
  value: 10,
  rest: {
    value: 20,
    rest: {
      value: 30,
      rest: null
    }
  }
}
*/

function listToArray(list, array=[]) {
  // base
  // once this base is found, recursion will stop
  if (list.rest === null){
    array.push(list.value);
    return array;
  }
  // recursion
    // how to update array
    array.push(list.value);

  return listToArray(list.rest, array);
}
// console.log(listToArray(list1)); // => [10, 20, 30]
  // BASE? NO
  // RECURSION
    // array.push(list.value) => push 10 into array => [10]
    // return listToArray(list.rest, [10])
      // return listToArray({value: 20, rest: {value: 30, rest: null}, [10])
        // BASE? NO
        // RECURSION
          // array.push(list.value) => push 20 into array => [10, 20]
          // return listToArray(list.rest, [10, 20])
            // return listToArray(rest: {value: 30, rest: null}, [10, 20])
              // BASE? YES
                // array.push(30) => [10, 20, 30]
                // return [10, 20, 30]

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// takes an element and a list
// creates a new list that adds the element to the front of the input list
/* var example = {
  value: 2, // node 1
  rest: {
    value: 3, // node 2
    rest: null
  }
}
*/
//       prepend(1, example)
function prepend(n, list) {
  let output = {value: n, rest: list};
  return output;
}
/*
should return =>
{
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
}
*/

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// takes a list and a number
// returns the element at the given position in the list (with 0 referring to the first element)
// undefined when there is no such element
// recursion
function nth(list, num) {

}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(x, y) {
  // determine if x and y are NOT objects
  // ex: deepEqual(1, 1)
  if (typeof x !== "object" && typeof y !== "object"){
    return x === y; // aka return the result of whatever this evaluates to
  }
  // determine if x OR y is not an object
  // ex: deepEqual({a: 1}, "a")
  if (typeof x !== "object" || typeof y !== "object"){
    return false;
  }
  // now we are dealing with 2 objects
  // create arrays of each inputs keys
  let xKeys = Object.keys(x); // stores values of keys in arrays
  let yKeys = Object.keys(y) // stores values of keys in arrays
  // very quickly catches if the arrays have different lengths meaning the objects obvi aren't the same
  // ex: deepEqual({a: 1, b: 2}, {a: 1})
  if (xKeys.length !== yKeys.length){
    return false;
  }
  // iterate to determine if array keys match and value at keys match
  for (let i = 0; i < xKeys.length; i++){
    // determine if the current key is NOT included in yKeys
    // aka if yKeys is now ["a"] is "a" in xKeys
    // invoking deepEqual function on the value at the particular key we are on
    if (!yKeys.includes(xKeys[i]) || !deepEqual(x[xKeys[i]], y[xKeys[i]])){
    //                                deepEqual(x["a"], y["a"])
    //                                deepEqual(x[1], y[1]) is this truthy? ya
      return false
    }
  }
  return true;
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
