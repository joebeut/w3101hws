(function () {
  'use strict';

  var doubleArray = function(arrayToDouble) {
     var doubles = arrayToDouble.map(function(num) {
       return num * 2;
     });
     return doubles;
  };
  module.exports = doubleArray;
})();
