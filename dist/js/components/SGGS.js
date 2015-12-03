'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var Component = React.Component;

var mdLoad = require(__dirname + '/../mdLoad');

var SGGS = (function (_Component) {
  _inherits(SGGS, _Component);

  function SGGS(props) {
    _classCallCheck(this, SGGS);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SGGS).call(this, props));

    _this.state = { loading: true };
    return _this;
  }

  _createClass(SGGS, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.getElementById('sggs').innerHTML = '';
      document.getElementById('sggs').style.display = 'none';
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      mdLoad.file(__dirname + '/../../../docs/SGGS.md').then(function (t) {
        document.getElementById('sggs').innerHTML = t;
        document.getElementById('sggs').style.display = 'block';
        _this2.setState({ loading: false });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'h1',
        null,
        this.state.loading && 'Loading...'
      );
    }
  }]);

  return SGGS;
})(Component);

module.exports = SGGS;