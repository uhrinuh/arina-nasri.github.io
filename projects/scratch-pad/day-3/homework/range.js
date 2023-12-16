// #!/usr/bin/env node

'use strict';

/**
 * 3: range()
 *
 *  a. Create a function called range that takes two integers as 
 *  parameters and returns an Array containing all integers 
 *  between the two parameters, inclusively.  For example:
 *
 *      range(8, 14);  // => [8, 9, 10, 11, 12, 13, 14]
 *
 *  If the first argument is greater than the second, 
 *  return the range in reverse order, ie:
 *
 *      range(14, 8);  // => [14, 13, 12, 11, 10, 9, 8]
 *
 *  TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best?
 *  c. you'll wanna make use of the push() method of Array.
 */

// create a function called range that takes 2 integers as parameters
function range(start, end) {
    // YOUR CODE GOES BELOW HERE //

    // create something to collect the output you'll return
    var output = [];
    // if the start is greater than the end
    if (start > end){
        // for loop to go through each range
        for (var i = start; i >= end; i--){
            // push it in the output
            output.push(i);
        }
    } else {
        // but if the end is bigger than the start
        for (var i = start; i <= end; i++){
            // push it in
            output.push(i);
        }
    }
    return output;
    
    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.range = range;
}
