'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactFela = require('react-fela');

var _felaTools = require('fela-tools');

exports.default = function (styles) {
  var stylesheet = _felaTools.StyleSheet.create(styles);
  var mapStylesToProps = function mapStylesToProps(props) {
    return function (renderer) {
      return Object.keys(stylesheet).reduce(function (rules, rule) {
        rules[rule] = renderer.renderRule(stylesheet[rule], props);
        return rules;
      }, {});
    };
  };
  return (0, _reactFela.connect)(mapStylesToProps);
};

module.exports = exports['default'];