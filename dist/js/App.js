'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

window.jQuery = window.$ = require('jQuery');

var React = require('react');
var Component = React.Component;

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var Link = ReactRouter.Link;

var Nav = require(__dirname + '/dist/js/components/Nav');
var Greeting = require(__dirname + '/dist/js/components/Greeting');
var About = require(__dirname + '/dist/js/components/About');
var Baani = require(__dirname + '/dist/js/components/Baani');
var SGGS = require(__dirname + '/dist/js/components/SGGS');
var Nitnem = require(__dirname + '/dist/js/components/Nitnem');
var Calendar = require(__dirname + '/dist/js/components/Calendar');
var Shabad = require(__dirname + '/dist/js/components/Shabad');
var Shabads = require(__dirname + '/dist/js/components/Shabads');

var App = (function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(App).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(Nav, null),
        React.createElement(
          'div',
          { className: 'text-center', id: 'baaniWrapper', tabIndex: 0 },
          this.props.children || React.createElement(Greeting, null)
        )
      );
    }
  }]);

  return App;
})(Component);

require('react-dom').render(React.createElement(
  Router,
  { onUpdate: function onUpdate() {
      console.log(window);window.scrollTo(0, 0);
    } },
  React.createElement(
    Route,
    { path: '/', component: App },
    React.createElement(Route, { path: 'about', component: About }),
    React.createElement(Route, { path: 'sggs', component: SGGS }),
    React.createElement(Route, { path: 'calendar', component: Calendar }),
    React.createElement(Route, { path: 'shabads', component: Shabads }),
    React.createElement(Route, { path: 'shabads/:shabad', component: Shabad }),
    React.createElement(Route, { path: 'nitnem', component: Nitnem }),
    React.createElement(Route, { path: 'nitnem/:baani', component: Baani })
  )
), document.getElementById('root'));