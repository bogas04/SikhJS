'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var Component = React.Component;

var Baanies = (function (_Component) {
  _inherits(Baanies, _Component);

  function Baanies() {
    _classCallCheck(this, Baanies);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Baanies).apply(this, arguments));
  }

  _createClass(Baanies, [{
    key: 'render',
    value: function render() {
      var _baanies = require('../baanies');
      var baanies = {
        nitnem: _baanies.nitnem.map(function (e) {
          return React.createElement(
            'li',
            { key: e },
            React.createElement(
              Link,
              { className: 'btn-lg', to: '/nitnem/' + e },
              ' ',
              e,
              ' '
            )
          );
        }),
        others: _baanies.others.map(function (e) {
          return React.createElement(
            'li',
            { key: e },
            React.createElement(
              Link,
              { className: 'btn-lg', to: '/nitnem/' + e },
              ' ',
              e,
              ' '
            )
          );
        })
      };
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          { style: { fontFamily: 'gurmukhi_heavy' } },
          'Œ Ç ‰'
        ),
        React.createElement(
          'h2',
          null,
          ' Nitnem '
        ),
        React.createElement(
          'ul',
          { className: 'list-unstyled' },
          baanies.nitnem
        ),
        React.createElement(
          'h2',
          null,
          ' Other Baanies '
        ),
        React.createElement(
          'ul',
          { className: 'list-unstyled' },
          baanies.others
        )
      );
    }
  }]);

  return Baanies;
})(Component);

module.exports = Baanies;