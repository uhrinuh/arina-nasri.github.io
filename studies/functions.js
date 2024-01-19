/**
 * FUNCTIONS:
 * 
 * 0. Functions are a set of statements that performs a task or calculates a value.
 * To do this, it should take some input and return an output where there is a relationship between the input and output.
 * To use a function, you must define it in the scope you wish to call it.
 * 
 * 1. The two phrases to using functions: 
 * First we must define the function.
 * Next we can execute (or two other words for executing a function?) a function by calling it.
 * 
 * 2. What's the difference between a function's parameters and arguments passed to a function?
 * Parameters are the variables listed inside the () when the function is defined.
 * Arguments are the values passed as parameters to the function when it is invoked.
 * 
 * 3. What's the syntax for a NAMED function?
 * function nameOfFunction(param1, param2{
 * // do something
 * // return something
 * }
 * nameOfFunction(argument, argument)
 * 
 * 4. How do we assign a function to a variable?
 * We do so by creating a variable with a name and set it equal to our function.
 * 
 * 5. Functions can OPTIONALLY take inputs and OPTIONALLY return a single value. 
 * How do we specify inputs, and how do we specify outputs?
 * We can specify inputs and outputs by using parameters and return statements.
 * 
 * 6. Scope: Functions can see and modify variables in parent or global scopes. 
 * The inverse is NOT true.
 * 
 * 7. Closures: Functions form closures around the data they house.
 * If an object returned from the function and is held in memory somewhere (referenced), that closure stays alive, and data can continue to exist in these closures.
 * 
 */

// 1. The two phrases to using functions: First we must ___? Next we can execute (or two other words for executing a function?) a function by? //
// first we define our function and give it a set parameter
function paymentMessage(name){
    // we tell the function to do something in regards to that parameter
    return name + " you have successfully paid your bill."
}
// then we invoke the function by giving the parameter an argument
paymentMessage("Arina");

// 2. What's the difference between a function's parameters and arguments passed to a function? //
// name is the parameter for function paymentMessage
// parameters don't have a value until you give one when it is invoked
function paymentMessage(name){
    return name + " you have successfully paid your bill."
}
// "Arina" is the argument and it gets passed in as the parameter 
paymentMessage("Arina");

// 3. What's the syntax for a NAMED function? //
// function nameOfFunction(param)
function paymentMessage(name){
    // what do you want this function to do?
    return name + " you have successfully paid your bill."
}
// invoke it nameOfFunction(argument)
paymentMessage("Arina");

// 4. How do we assign a function to a variable? //
// create a variable and set it equal to your function 
var bankStatement = function paymentMessage(name){
    return name + " you have successfully paid your bill."
}
paymentMessage("Arina");

// 5. Functions can OPTIONALLY take inputs and OPTIONALLY return a single value. How do we specify inputs, and how do we specify outputs? //
// the inputs we are giving our add function is a, b 
function add(a, b){
    // to get a single output, we are making our function return a + b
    return a + b
}
// when we invoke the function with arguments, we get a single value
// for this function it is 3
add(1, 2)

// 6. Scope: Functions can see and modify variables in parent or global scopes. The inverse is NOT true. //
var age = 22;
function doThis(){
  console.log(age); // the function can see the variable age in the global scope so it automatically logs 22
}
doThis();

// 7. Closures: Functions form closures around the data they house. If an object returned from the function and is held in memory somewhere (referenced), that closure stays alive, and data can continue to exist in these closures. //
// we created a function called makeFunc()
function makeFunc() {
    // inside the makeFunc() function, we set a constant variable name set to "Arina"
    const name = "Arina";
    // then inside the original function, we make a new function
    function newName() {
        // in this function, we console.log(name) which was defined in the last function
        // this will return "Arina" even though name was not defined in newName()
      console.log(name);
    }
    // and we only return the inside function
    return newName;
  }
  // we made a new variable and set it to the og function
  const myFunc = makeFunc();
  // we invoke the variable we set to the og function
  myFunc();