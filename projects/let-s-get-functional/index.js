// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require("underbar");

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./arina-nasri.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

/* var maleCount = function(array) {
    let males = 0;
    for (let i = 0; i < array.length; i++){
        if (array[i].gender === "male"){
            males += 1;
        }
    }
    return males;
};

var maleCount = function(array){
    let males = _.filter(array, function(customer){
        return customer.gender === "male";
    }) // [ {male}, {male}, {male} ]
    return males.length;
}
*/

var maleCount = function(array){
    let males = _.filter(array, (customer) => customer.gender === "male");
    return males.length;
}

/* var femaleCount = function(array){
    var females = 0;
    for (var i = 0; i < array.length; i++){
        if (array[i]["gender"] === "female"){
            females += 1;
        }
    }
    return females;
}
*/
var femaleCount = function(array){
    // return the result of reducing through the input array to accumulate the number of female customers
    return _.reduce(array, function(accumulator, current){
        if (current.gender === "female"){
            accumulator += 1;
        }
        return accumulator;
    }, 0)
}

var oldestCustomer = function(array){
    // use reduce to "accumulate" the oldest customer object
    let oldest = _.reduce(array, function(accumulator, current){
        if (current.age > accumulator.age){
            return current;
        } else {
            return accumulator;
        }
    })
    return oldest.name;
};

var youngestCustomer = function(array){
    let youngest = _.reduce(array, function(accumulator, current){
        if (current.age > accumulator.age){
            return accumulator;
        } else {
            return current;
        }
    })
    return youngest.name
};

// find the average balance of all customers
// look through the array
// see which customers have a balance
// if they have a balance, add all balances together 
// and divide it by how many customers that have balances there are
/* var example = "$4,567.89" => 4567.89
var replaced = example.replace(/[$, ,]/g, ""); // "4567.89"
*/
var averageBalance = function(array){
    let balance = _.reduce(array, function(accumulator, current){
        let rightBalance = current.balance.replace(/[$, ,]/g, "");
        // change rightBalance to a number bc its a string
        let newBalance = parseFloat(rightBalance);
        return accumulator + newBalance;
    }, 0);
    return balance / array.length;
  }

// we have an output variable which is undefined
// does it have a seed? ya
// goes to the else block
    // output = 0
    // i = 0
    // output = func(0, array[0])

var firstLetterCount = function(array, letter){
    let givenLetter = _.filter(array, function(customer){
        // find how many customer's names begin with a given letter
        if (customer.name[0].toUpperCase() === letter.toUpperCase()){
            return customer.name;
        }
    })
    return givenLetter.length;
};

// given a customer
// how many of their friends have names that start with the same letter
var friendFirstLetterCount = function(array, customer, letter){
    let output = [];
    for (let i = 0; i < array.length; i++){
        if (array[i].name === customer){
            for (let j = 0; j < array[i].friends.length; j++){
                output.push(array[i].friends[j].name);
                return output.length;
            }
        }
    }
    let friendsGivenLetter = _.filter(array, function(customer){
        if (customer.friends.name[0].toUpperCase() === letter.toUpperCase()){
            return customer.friends.name;
        }
    })
    return friendsGivenLetter;
};

var friendsCount = function(array, name){
    let customerFriendName = _.filter(array, function(customer){
        // given a customer's name
        // return the customer's names that have ^ that customer in their friends list
        if (customer.friends.includes(name) === true){
            return customer.name;
        }
    })
    return customerFriendName;
};

var topThreeTags = function(array){
    let commonTag = _.filter(array, function(customer){

    })
};

// use reduce to go through each value in the array and add it to the accumulator
var genderCount = function(array){
    let genderObj = _.reduce(array, function(accumulator, current){
        let gends = current.gender;
        for (let i = 0; i < gends.length; i++){
          // does current gender exist in accumulator?
            // if it exists what do i do
          if (accumulator[current.gender]){
            accumulator[current.gender] += 1;
            // else it doesn't
            // if it doesn't exist i need to create it and initialize it a value 
          } else {
            accumulator[current.gender] = 1;
          }
        }
        return accumulator;
      }, {});
      return genderObj;
};
// we have an output variable which is undefined
// if seed === undefined NO
// else if there is a seed value
    // output = 0
    // for (let i = 0)
    // output = func(0, array[0])

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
