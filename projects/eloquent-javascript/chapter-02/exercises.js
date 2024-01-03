
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(number){
  var result = "";
  for (let i = 0; i < number; i++){
    result += "#";
    console.log(result);
  }
}

////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz() {
 // prints the numbers 1-15
  for (var i = 1; i <= 15; i++){
      // if its a multiple of 3 and 5, print "fizzbuzz"
      if (i % 3 === 0 && i % 5 === 0){
              console.log("fizzbuzz");
          // if its a multiple of 5, print "buzz"
      } else if (i % 5 === 0){
          console.log("buzz");
          // if its a multiple of 3, print "fizz"
      } else if (i % 3 === 0){
          console.log("fizz");
      } else {
          console.log(i);
      }
  }
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(number) {
  // set a variable called result to an empty string
  var result = "";
  // create spaces and characters
  for (var i = 0; i < number; i++){
    // create lines
    for (var j = 0; j < number; j++){
      // if the spaces/characters and the lines are evenly matched
      if ((i + j) % 2 === 0){
        // we add spaces
        result += " ";
        // if its not even
      } else {
        // add hashtags
        result += "#";
      }
    }
    // make new lines each time
    result += "\n";
  }
  console.log(result);
}

drawChessboard(8);

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
