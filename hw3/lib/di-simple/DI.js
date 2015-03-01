(function () {
  'use strict';

  var DI = function (dependency) {
    this.dependency = dependency;
  };

  function inject (func) {
    var argsString = fn.toString()
      .match(/^function\s*[^\(]*\(([^\)]*)\)/)[1];
    var argNames = argsString.split(',').map(function(argName) {
      return argName.replace(/\s*/g, '');
    });
    var args = argNames.map(function(argName) {
      return cache[argName];
    });
    return fn.apply(null, args);
  };

  function register (name, value) {
    DI[name] = value;
  };

  module.exports = {
    inject: inject,
    register: register
  };
})();
