'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var Component = React.Component;
var maxResults = 300;

var Shabads = (function (_Component) {
  _inherits(Shabads, _Component);

  function Shabads(props) {
    _classCallCheck(this, Shabads);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Shabads).call(this, props));

    _this.database = JSON.parse(require('fs').readFileSync(__dirname + '/../../../docs/keertan.json', 'utf8'));
    _this.state = { keyword: "" };
    return _this;
  }

  _createClass(Shabads, [{
    key: 'search',
    value: function search(keyword) {
      this.setState({ keyword: keyword });
    }
  }, {
    key: 'filteredResults',
    value: function filteredResults() {
      var keyword = this.state.keyword;
      return (keyword !== "" ? this.database.filter(function (e) {
        return e.title.toLowerCase().includes(keyword.toLowerCase()) || e.ang === keyword;
      }) : this.database).slice(0, maxResults);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var results = this.filteredResults().map(function (e) {
        return React.createElement(
          'tr',
          { key: e.url },
          React.createElement(
            'td',
            null,
            React.createElement(
              Link,
              { to: '/shabads/' + e.title },
              ' ',
              e.title,
              ' '
            )
          ),
          React.createElement(
            'td',
            null,
            e.ang
          )
        );
      });
      return React.createElement(
        'div',
        { style: { paddingTop: '25px' } },
        React.createElement(
          'div',
          { className: 'form-group form-inline' },
          React.createElement('input', {
            className: 'form-control',
            style: { width: '70%' },
            placeholder: 'Search shabads from Amrit Keertan',
            onChange: function onChange(e) {
              return _this2.search(e.currentTarget.value);
            }
          }),
          React.createElement(
            'small',
            null,
            ' Showing ',
            results.length,
            ' Shabad Results '
          )
        ),
        React.createElement(
          'div',
          { style: { maxHeight: '84vh', overflow: 'auto' } },
          React.createElement(
            'table',
            { className: 'table table-bordered' },
            React.createElement(
              'thead',
              null,
              React.createElement(
                'tr',
                null,
                React.createElement(
                  'th',
                  null,
                  'Shabad'
                ),
                React.createElement(
                  'th',
                  null,
                  'Ang'
                )
              )
            ),
            React.createElement(
              'tbody',
              null,
              results
            )
          )
        )
      );
    }
  }]);

  return Shabads;
})(Component);

module.exports = Shabads;