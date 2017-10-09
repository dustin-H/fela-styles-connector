'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactFela = require('react-fela');

exports.default = function (styles) {
  var rules = Object.keys(styles).map(function (key) {
    var value = styles[key];
    if (typeof value === 'function') {
      return value;
    } else {
      return function () {
        return value;
      };
    }
  });
  return (0, _reactFela.connect)(rules);
};

module.exports = exports['default'];