/**
 * OPERATORS:
 * 
 * 0. Operators act on our data, such as assigning them to a variable or comparing them, or including the in arithmetic operations.
 * Operators are classed by what they do and how many operands they require.
 * Operands are valies that operators act on.
 * Unary operators only work with one value, binary with two, and ternary with three.
 * 
 * 1. The assigment operator assigns a value to its left operand based on the value of its right operand.
 * To do this, you use =.
 * 
 * 2. Arithmetic operators take numerical values as their operands and returns a single numerical value
 * The standard arithmetic operators are addition (+), subtraction (-), multiplication (*), and division (/).
 * Remainder (%), increment (++), and decrement (--) are also arithmetic operators.
 * 
 * 3. Comparison operators
 * Comparison operators compare two values (operands) and evalue to a boolean, true or false.
 * Equal (==) returns true if the operands are equal.
 * Not equal (!=) returns true if the operands are not equal.
 * Strictly equal (===) returns true if the operands are equal and of the same type.
 * Strictly not equal (!==) returns true if the operands are of the same type but not equal, or are of different types.
 * Greater than (>)/Greater than or equal (>=) returns true if the left operand is greater than the right operand, or is equal to the right operand.
 * Less than (<)/Less than or equal (<=) returns true if the left operand is less than the right operand, or is equal to the right operand.
 * 
 * 4. Logical operators
 * && is the and operator: both conditions must resolve to true.
 * || is the or operator: one or the other must resolve to true.
 * ! is the bang operator: flips the truthiness of the value.
 * 
 * 5. Unary operators (!, typeOf, -)
 * Unary operators is an operation with only one operand.
 * ! is the bang operator: flips the truthiness of the value.
 * typeOf operator returns a string indicating the type of the unevaluated operand.
 * - is the negation operator which precedes its operand and negates it.
 * 
 * 6. Ternary operators (a ? b : c)
 * The only operator that takes 3 operands.
 * The operator can have one of two values based on a consition.
 * Syntax = condition ? val1 : val2
 * If codition is true, the operator has the value of val1, otherwise it has the value of val2
 */

// 1. ASSIGNMENT OPERATOR //
// we are using the assignment operator (=) to set the variable name to the string value "Arina"
var name = "Arina";

// 2. ARITHMETIC OPERATORS //
var add = 1 + 2 // sets the variable add to the value of 1 + 2 aka 3
var subtract = 2 - 1 // sets the variable subtract to the value of 2 - 1 aka 1
var multiply = 2 * 2 // sets the variable multiply to the value of 2 * 2 aka 4
var divide = 4 / 2 // sets the variable divide to the value of 4 / 2 aka 2
var remainder = 12 % 5 // sets the variable remainder to the value of the integer remainder of dividing two operands aka 2

// 3. COMPARISON OPERATORS //
var equal1 = 2;
var equal2 = 2;
var equal3 = 3;
equal1 == equal2; // returns true since equal1 and equal2 are equal to each other
equal1 != equal2; // returns false since equal1 and equal2 are equal to each other
equal1 === equal2; // returns true since equal1 and equal2 are equal to each other and are the same type
equal1 !== equal2; // returns false since equal1 and equal2 are equal to each other and are the same type
equal3 > equal1; // returns true since equal3 is greater than equal1
equal2 >= equal1; // returns true since equal2 and equal1 are equal to each other
equal2 < equal3; // returns true since equal2 is less than equal3
equal2 <= equal3; // returns true since equal2 is less than equal3

// 4. LOGICAL OPERATORS //
console.log(1 < 2 && 1 > 0); // if 1 is less than 2 and 1 is greater than 0 print true
console.log(2 < 2 || 1 > 0); // if 2 is less than 2 or 1 is greater than 0 print true
var result = ""; // set the variable result to an empty string
if (!result){ // if result isn't true
    console.log("There was no result"); // print There was no result
}

// 5. UNARY OPERATORS //
// !
if (!result){ // if result isn't true
    console.log("There was no result"); // print There was no result
}
// typeOf
console.log(typeof 1); // will print "number" since 1 is a number
// -
var i = 1;
console.log(-i); // makes the value of i turn negative

// 6. TERNARY OPERATOR //
var age = 18
var status = age >= 18 ? "adult" : "minor" // if age is greater than or equal to 18, "adult" is given, if not, "minor" is given
console.log(status); // "adult" is printed