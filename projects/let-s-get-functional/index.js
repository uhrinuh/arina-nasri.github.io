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
            }
        }
    }
    let friendsGivenLetter = _.filter(output, function(friend){
        if (friend[0].toUpperCase() === letter.toUpperCase()){
            return true;
        }
    })
    return friendsGivenLetter.length;
};
 
// return the customers that have a specific name in their friends list
var friendsCount = function(array, name){
    let customer = array.reduce(function(accumulator, current){
      // iterate over current.friends array to access
      for (let i = 0; i < current.friends.length; i++){
        // if the name is in the friends array, push the name into the accumulator
        if (current.friends[i].name === name){
          accumulator.push(current.name);
        }
      }
      return accumulator;
    }, [])
    return customer;
  }

var topThreeTags = function(array){
    // create a result object
    let resultObj = array.reduce(function(accumulator, current){
      // create a tags array
      let tags = current.tags;
      // iterate over the tags array
      for (let i = 0; i < tags.length; i++){
        // determine if the current tag ALREADY exists in acc
        if (accumulator[tags[i]]){
          // if it exists what do i do
          accumulator[tags[i]] += 1;
          // else it doesn't
          // if it doesn't exist i need to create it and initialize it a value 
        } else {
          accumulator[tags[i]] = 1;
        }
      }
      return accumulator;
    }, {});
    let resultArr = [];
    // iterate through resultObj
    for (var key in resultObj){
      // push each key/value pair into resultArr
      resultArr.push([key, resultObj[key]]);
    }
    resultArr.sort(function(a, b){
      return b[1] - a[1];
    })
    // return array with the highest string followed by 2 follow by 3
    return [resultArr[0][0], resultArr[1][0], resultArr[2][0]]
  };

// use reduce to go through each value in the array and add it to the accumulator
var genderCount = function(array){
    // create a result object
    let result = array.reduce(function(accumulator, current){
      // determine if the current object's gender ALREADY exists in acc
      if (accumulator[current.gender]){
        // if it exists what do i do
        accumulator[current.gender] += 1;
        // else it doesn't
        // if it doesn't exist i need to create it and initialize it a value 
      } else {
        accumulator[current.gender] = 1;
      }
      return accumulator;
    }, {});
    return result;
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
