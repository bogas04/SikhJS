'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var ReactDOM = require('react-dom');
var Component = React.Component;
var ReactMarkdown = require('react-markdown');
var fs = require('fs');

var SGGS = (function (_Component) {
  _inherits(SGGS, _Component);

  function SGGS(props) {
    _classCallCheck(this, SGGS);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SGGS).call(this, props));

    _this.state = { currentSet: '000' };
    _this.options = Array(143).fill(0).map(function (e, i) {
      return React.createElement(
        'option',
        {
          value: _this.setNumberToString(i),
          key: i },
        i * 10 + 1,
        '-',
        (i + 1) * 10,
        ' Angs'
      );
    });
    return _this;
  }

  _createClass(SGGS, [{
    key: 'updateSetBy',
    value: function updateSetBy(value) {
      var cs = this.state.currentSet;
      cs = parseInt(cs) + value;
      cs = this.setNumberToString(cs);
      this.changeSet(this.setNumberToString(parseInt(this.state.currentSet) + value));
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      ReactDOM.findDOMNode(this).scrollIntoView();
    }
  }, {
    key: 'setNumberToString',
    value: function setNumberToString(setNumber) {
      return ('000' + setNumber).slice(-3);
    }
  }, {
    key: 'changeSet',
    value: function changeSet(newSet) {
      this.setState({ currentSet: newSet || this.state.currentSet });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          ' Sri Guru Granth Sahib '
        ),
        React.createElement(
          'form',
          { className: 'form-inline' },
          React.createElement(
            'button',
            { className: 'btn btn-default', onClick: function onClick(e) {
                return _this2.updateSetBy(-1);
              } },
            'Previous Set'
          ),
          React.createElement(
            'select',
            { className: 'form-control', onChange: function onChange(e) {
                return _this2.changeSet(e.currentTarget.value);
              } },
            React.createElement(
              'option',
              { value: '' },
              ' Select Ang Set '
            ),
            this.options
          ),
          React.createElement(
            'button',
            { className: 'btn btn-default', onClick: function onClick(e) {
                return _this2.updateSetBy(1);
              } },
            'Next Set'
          )
        ),
        React.createElement(
          'div',
          { className: 'gurbani-text' },
          React.createElement(ReactMarkdown, {
            source: fs.readFileSync(__dirname + '/../../../docs/SGGS/SGGS_' + this.state.currentSet + '.md', 'utf-8') })
        ),
        React.createElement(
          'button',
          { className: 'btn btn-primary', onClick: function onClick(e) {
              return _this2.updateSetBy(-1);
            } },
          '<'
        ),
        React.createElement(
          'button',
          { className: 'btn btn-primary', onClick: function onClick(e) {
              return _this2.updateSetBy(1);
            } },
          '>'
        )
      );
    }
  }]);

  return SGGS;
})(Component);

module.exports = SGGS;