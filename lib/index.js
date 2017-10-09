'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactFela = require('react-fela');

exports.default = function (styles) {

  var getRule = function getRule(style) {
    if (typeof style === 'function') {
      return style;
    } else {
      return function () {
        return style;
      };
    }
  };

  var rules = {};
  for (var i in styles) {
    rules[i] = getRule(styles[i]);
  }

  return (0, _reactFela.connect)(rules);
};

module.exports = exports['default'];