'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var Component = React.Component;

var Shabad = (function (_Component) {
  _inherits(Shabad, _Component);

  function Shabad(props) {
    _classCallCheck(this, Shabad);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Shabad).call(this, props));

    _this.database = JSON.parse(require('fs').readFileSync(__dirname + '/../../../docs/keertan.json', 'utf8'));
    _this.shabad = _this.database.find(function (e) {
      return e.title === _this.props.params.shabad;
    });
    return _this;
  }

  _createClass(Shabad, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { style: { height: '100%' } },
        React.createElement(
          'h3',
          null,
          ' This feature requires internet connection '
        ),
        React.createElement(
          'webview',
          { src: this.shabad.url + '/print_view', style: { width: '100%' } },
          'Loading...'
        )
      );
    }
  }]);

  return Shabad;
})(Component);

module.exports = Shabad;