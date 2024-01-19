/**
 * STRING MANIPULATION:
 * 
 * 0. Strings are primitive data types in Javascript. 
 * Strings are known by having some sort of value inside "". 
 * Strings are immutable meaning any sort of string manipulation would produce a new string as to not alter the original string. 
 * 
 * 1. With operators
 * + operator: concatenates two different strings together
 * == operator: determines if strings are equal to each other
 * != operator: determines if strings are not equal to each other
 * >/ >= operator: determines if one string is greater than/greater than or equal to another string
 * </<= operator: determines if one string is less than/ less than or equal to another string
 * 
 * 2. With string methods
 * length: returns the length of a string
 * charAt(): returns the character at a specified index in a string
 * at(): same as charAt() except it can also do negative indexes
 * slice(): extracts a part of a string and returns the extracted part in a new string
 * toUpperCase() and toLowerCase(): changes string to either be all capital or all lower case
 * concat(): joins two or more strings
 * trim(): removes whitespace from both sides of a string
 * repeat(): returns a new string with a number of copies of a string
 * replace(): replaces a specified value with another value in a string and only replaces the first match/is case sensitive
 * replaceAll(): allows you to specify a regular expression instead of a string to be replaced
 * split(): converts a string to an array
 */

// 1. With operators //
// + operator
var fruit = "apple"; // set variable fruit to string apple
var twoFruits = "pine" + fruit; // sets twoFruits to "pineapple"
// == operator
"apples" == "apples" // does the string "apples" == "apples" ? true
// != operator
"apples" == "oranges" // does the string "apples" == "oranges" ? false
// > operator
"hey" > "no" // is the string "hey" greater than "no" ? true
// >= operator
"hey" >= "bye" // is the string "hey" greater than or equal to "bye" ? true
// < operator
"arina" < "jamie" // is the string "arina" less than "jamie" ? false
// <= operator
"trevor" <= "mason" // is the string "trevor" less than or equal to "mason" ? false

// 2. With string methods //
let text = "I love hockey"; // set variable text = to string "I love hockey"
// length
let length = text.length; // would return the number 13 because that is the length of text
// charAt()
let char = text.charAt(0); // would return I because that is the character at the 0 index in text
// at()
let at = text.at(0); // would return I because that is the character at the 0 index in text
// can also do the syntax like text[0]
// slice()
let fruitText = "Apple, Banana, Kiwi"; // set new variable to a string of fruits
let part = text.slice(7, 13); // we sliced out "Banana"
// toUpperCase and toLowerCase
let textCapitalized = text.toUpperCase() // will change "I love hockey" to "I LOVE HOCKEY"
let textLowerCase = text.toLowerCase() // will change "I love hockey" to "i love hockey"
// concat()
let text1 = " and my favorite team is the Ducks."
let text3 = text.concat(text1); // this will make text3 = "I love hockey and my favorite team is the Ducks."
// trim()
let sentence = "            I am hungry.           "
let sentence1 = sentence.trim() // changes ^ to "I am hungry."
// repeat()
let result = text.repeat(2) // this repeats "I love hockey" twice to be "I love hockeyI love hockey"
// replace()
let newText = text.replace("hockey", "F1") // this replaces the hockey value in text to be "F1" so the new string is "I love F1"
// replaceAll()
let replaceThis = "I love hockey, hockey is such an interesting sport."
replaceThis = replaceAll("hockey", "F1") // now ReplaceThis will say "I love F1, F1 is such an interesting sport."
// split()
let array = text.split("") // array will now equal ["I", "love", "hockey"]