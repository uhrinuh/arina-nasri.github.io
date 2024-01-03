/**
 * CONTROL FLOW:
 * 
 * 0. Control flow refers to the controlling of the flow of our application.
 * It is the order in which the computer executes statements in a script.
 * Code is run in order from the first line to the last line, unless the computer runs across structures that change the control flow, such as conditional statements and switch statements.
 * Values will be changed into a boolean which means the value is evaluated in a boolean context.
 * 
 * 1. If
 * To start a conditional block of code, you must use an if statement
 * Syntax:
 * If (condition){
 *  run code here if condition is true
 * }
 * If that condition is true, the code will run.
 * If the code is false, the code will not run.
 * 
 * 2. Else-if
 * You can chain together any number of else-if statements to the first if statement.
 * Syntax:
 * If (condition){
 *      run some code here if condition is true
 * } else if (condition){
 *      run this code if first if statement is false and this one is true
 * }
 * 
 * 3. Else
 * Else is a default condition placed at the end of conditional block of code.
 * If all prior statements to the else statements are false, the else statement code will automatically run.
 * Syntax:
 *  * If (condition){
 *      run some code here if condition is true
 * } else if (condition){
 *      run this code if first if statement is false and this one is true
 * } else {
 *      default run this code if no other if/else-if statement is true
 * }
 * 
 * 4. Switch
 * Switch statements are similar to if-else statements.
 * The switch statement evaluates an input expression, matching the expression's value to a case clause, and executes statements associated with that case.
 Syntax:
 switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
 */

// 1. If //
// initialize a variable
var favHockeyTeam = "Ducks";
if (favHockeyTeam === "Ducks"){ // if the variable favHockeyTeam strictly equals "Ducks"
    console.log("Go Ducks!") // print "Go Ducks!"
} // "Go Ducks!" is printed

var favHockeyTeam = "Ducks";
if (favHockeyTeam === "Devils"){ // if the variable favHockeyTeam strictly equals "Devils"
    console.log("Go Devs!") // print "Go Devs!"
} // since favHockeyTeam does not strictly equal "Devils", no code is run

// 2. Else-if //
if (favHockeyTeam === "Devils"){ // if the variable favHockeyTeam strictly equals "Devils"
    console.log("Go Devs!") // print "Go Devs!"
} else if (favHockeyTeam === "Ducks"){ // if the first condition is false and favHockeyTeam strictly equals "Ducks"
    console.log("Go Ducks!") // print "Go Ducks!"
} // since the first condition was false, we move to the else-if statement which was true therefore "Go Ducks!" prints

// 3. Else //
if (favHockeyTeam === "Devils"){ // if the variable favHockeyTeam strictly equals "Devils"
    console.log("Go Devs!") // print "Go Devs!"
} else if (favHockeyTeam === "Canucks"){ // if the first condition is false and favHockeyTeam strictly equals "Canucks"
    console.log("Go Nucks!") // print "Go Nucks!"
} else { // if favHockeyTeam is neither of those
    console.log("Ducks on top!") // automatically print "Ducks on top!"
} // we defaulted to our else statement since favHockeyTeam did not equal "Devils" or "Canucks"

// 4. Switch //
// initialize a variable called hockeyTeam to "Ducks"
var hockeyTeam = "Ducks" 
// we begin by switching hockeyTeam's assignment to whatever case given
switch (hockeyTeam){
    // if hockeyTeam = "BlackHawks"
    case "Blackhawks":
        // print "I love Bedsy, but no"
        console.log("I love Bedsy, but no");
        // must add a break between each new case
        break;
    // if hockeyTeam = "Kraken"
    case "Kraken":
        // print "I love Dunner, but also no"
        console.log("I love Dunner, but also no");
        // new case
        break;
    // if hockeyTeam = "Bruins"
    case "Bruins":
        // print "Sway Bae is great, but nah"
        console.log("Sway Bae is great, but nah");
        // break
        break;
    // default statement if none of the cases apply to our variable
    default:
        // print "I love the Ducks!!!"
        console.log("I love the Ducks!!!");
} // since none of the cases were true, the default statement was printed