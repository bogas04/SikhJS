window.jQuery = window.$ = require('jQuery');

const React = require('react');
const Component = React.Component;

const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;
const Link = ReactRouter.Link;

const Nav = require(__dirname + '/dist/js/components/Nav');
const Greeting = require(__dirname + '/dist/js/components/Greeting');
const About = require(__dirname + '/dist/js/components/About');
const Baani = require(__dirname + '/dist/js/components/Baani');
const SGGS = require(__dirname + '/dist/js/components/SGGS');
const Nitnem = require(__dirname + '/dist/js/components/Nitnem');
const Calendar = require(__dirname + '/dist/js/components/Calendar');
const Shabad = require(__dirname + '/dist/js/components/Shabad');
const Shabads = require(__dirname + '/dist/js/components/Shabads');

class App extends Component {
  render () {
    return (
      <div>
        <Nav />
        <div className = "text-center" id = "baaniWrapper" tabIndex={0}>
          {this.props.children || <Greeting />}
        </div>
      </div>
    );
  }
}

require('react-dom').render((
  <Router onUpdate={() => { console.log(window); window.scrollTo(0, 0)}}>
    <Route path="/" component={App} >
      <Route path="about" component={About}/>
      <Route path="sggs" component={SGGS}/>
      <Route path="calendar" component={Calendar}/>
      <Route path="shabads" component={Shabads}/>
      <Route path="shabads/:shabad" component={Shabad}/>
      <Route path="nitnem" component={Nitnem}/>
      <Route path="nitnem/:baani" component={Baani}/>
    </Route>
  </Router>
), document.getElementById('root'));
