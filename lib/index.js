'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactFela = require('react-fela');

exports.default = function (styles) {
  var mapStylesToProps = function mapStylesToProps(props) {
    return function (renderer) {
      return Object.keys(styles).reduce(function (classNames, rule) {
        var currentRule = styles[rule];

        if (typeof currentRule !== 'function') {
          styles[rule] = function () {
            return currentRule;
          };
        }

        classNames[rule] = renderer.renderRule(styles[rule]);
        return classNames;
      }, {});
    };
  };
  return (0, _reactFela.connect)(mapStylesToProps);
};

module.exports = exports['default'];