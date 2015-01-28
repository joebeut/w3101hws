(function () {
  'use strict';

  var sentencify = function (words) {
    // IMPLEMENT YOUR SOLUTION WITHIN THIS FUNCTION
    var sentence = '';
    var count = 0;
    if (words.length === 0) {
        return sentence;
    } else if (words.length === 1) {
        sentence = words[0];
        return sentence;
    } else {
        count = 1;
        sentence = words[0];
        while (count < words.length) {
           sentence = sentence + ' ' + words[count];
           count = count + 1;
        }
        return sentence;
    }
  };
  module.exports = sentencify;  // DO NOT CHANGE THIS
})();
