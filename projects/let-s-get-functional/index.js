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
var averageBalance = function(array){
    let balance = _.reduce(array, function(accumulator, current){
      return accumulator + current.balance;
    }, 0);
    return balance / array.length;
  }

var firstLetterCount = function(array, letter){
    let givenLetter = _.filter(array, function(customer){
        // find how many customer's names begin with a given letter
        if (customer.name[0].toUpperCase() === letter.toUpperCase()){
            return customer.name;
        }
    })
    return givenLetter.length;
};

// we have a customer
// each customer has multiple friends
// return a number of how many friends have a name that starts with a given letter
var friendFirstLetterCount = function(array, customer, letter){
    let friendsGivenLetter = _.filter(array, function(customer){

    })
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

var topThreeTags;

var genderCount;

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
