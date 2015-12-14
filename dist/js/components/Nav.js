'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');

var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Component = React.Component;

var Nav = (function (_Component) {
  _inherits(Nav, _Component);

  function Nav(props) {
    _classCallCheck(this, Nav);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Nav).call(this, props));

    _this.state = {
      nightMode: false
    };
    return _this;
  }

  _createClass(Nav, [{
    key: 'toggleNightMode',
    value: function toggleNightMode(e) {
      //TODO: Handle this React way
      if (this.state.nightMode) {
        e.currentTarget.classList.remove('night-mode');
        document.getElementById('baaniWrapper').classList.remove('night-mode');
        document.getElementById('sggs').classList.remove('night-mode');
      } else {
        e.currentTarget.classList.add('night-mode');
        document.getElementById('baaniWrapper').classList.add('night-mode');
        document.getElementById('sggs').classList.add('night-mode');
      }
      this.setState({
        nightMode: !this.state.nightMode
      });
    }
  }, {
    key: 'updateFontSize',
    value: function updateFontSize(e) {
      document.getElementById('baaniWrapper').style.fontSize = 35 * e.target.value + '%';
      document.getElementById('sggs').style.fontSize = 35 * e.target.value + '%';
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return React.createElement(
        'nav',
        { className: 'navbar navbar-default navbar-fixed-top', id: 'menuWrapper' },
        React.createElement(
          'div',
          { className: 'container-fluid' },
          React.createElement(
            'div',
            { className: 'navbar-header' },
            React.createElement(
              'button',
              { type: 'button', className: 'navbar-toggle collapsed', 'data-toggle': 'collapse', 'data-target': '#main-menu', 'aria-expanded': 'false' },
              React.createElement(
                'span',
                { className: 'sr-only' },
                'Toggle navigation'
              ),
              React.createElement('span', { className: 'icon-bar' }),
              React.createElement('span', { className: 'icon-bar' }),
              React.createElement('span', { className: 'icon-bar' })
            )
          ),
          React.createElement(
            'div',
            { className: 'collapse navbar-collapse', id: 'main-menu' },
            React.createElement(
              'ul',
              { className: 'nav navbar-nav' },
              React.createElement(
                'li',
                null,
                React.createElement(
                  Link,
                  { to: '/about' },
                  ' About '
                )
              ),
              React.createElement(
                'li',
                null,
                React.createElement(
                  Link,
                  { to: '/calendar' },
                  ' Calendar '
                )
              ),
              React.createElement(
                'li',
                null,
                React.createElement(
                  Link,
                  { to: '/sggs' },
                  ' Sri Guru Granth Sahib '
                )
              ),
              React.createElement(
                'li',
                null,
                React.createElement(
                  Link,
                  { to: '/nitnem' },
                  ' Nitnem '
                )
              ),
              React.createElement(
                'li',
                null,
                React.createElement(
                  Link,
                  { to: '/shabads' },
                  ' Shabads '
                )
              )
            ),
            React.createElement(
              'form',
              { className: 'navbar-form navbar-right form-inline' },
              React.createElement('input', { onChange: function onChange(e) {
                  return _this2.updateFontSize(e);
                }, id: 'fontChanger', type: 'range', name: 'font-size', min: '1', max: '10', step: '0.1' })
            ),
            React.createElement(
              'ul',
              { className: 'nav navbar-nav navbar-right' },
              React.createElement(
                'li',
                { onClick: function onClick(e) {
                    _this2.toggleNightMode(e);return false;
                  } },
                React.createElement(
                  'a',
                  { href: 'javascript:;' },
                  React.createElement('span', { className: 'glyphicon glyphicon-adjust' }),
                  ' Night Mode'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Nav;
})(Component);

module.exports = Nav;