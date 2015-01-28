(function () {
  'use strict';

  var sumArray = function sumArray(values) {
    // IMPLEMENT YOUR SOLUTION HERE!
    // MAKE SURE TO USE REDUCE!
    var sum = values.reduce(function(previousValue, currentValue, index, array) {
        return previousValue + currentValue;
    });
    return sum;
  };

  module.exports = sumArray; // DON'T CHANGE THIS
})();
