var module = (function () {
  'use strict';

  var dependencies = {};

  var inject = function (target) {
    var FN_ARGS = /^function\s*[^\(]*\(\s*([^\)]*)\)/m;
    var FN_ARG_SPLIT = /,/;
    var FN_ARG = /^\s*(_?)(\S+?)\1\s*$/;
    var STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;
    var text = target.toString();
    var args = text.match(FN_ARGS)[1].split(',');

    target.apply(target, this.getDependencies(args));
  };

  var getDependencies = function(arr) {
    var self = this;
    return arr.map(function(value) {
      return self.dependencies[value];
    });
  };

  var register = function (name, dependency) {
    dependencies[name] = dependency;
  };

  module.exports = {
    inject: inject,
    register: register
  };
})();
