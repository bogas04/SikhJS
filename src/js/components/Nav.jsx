const React = require('react');

const ReactRouter = require('react-router');
const Link = ReactRouter.Link;

const Component = React.Component;

class Nav extends Component {
  constructor (props) {
    super(props);
    this.state = {
      nightMode: false
    };
  }
  toggleNightMode (e) {
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
      nightMode : !this.state.nightMode
    });
  }
  updateFontSize (e) {
    document.getElementById('baaniWrapper').style.fontSize = ((35 * e.target.value) + '%');
    document.getElementById('sggs').style.fontSize = ((35 * e.target.value) + '%');
  }
  render () {
    return (
      <nav className = "navbar navbar-default navbar-fixed-top" id = "menuWrapper">
        <div className = "container-fluid">
          <div className = "navbar-header">
            <button type = "button" className = "navbar-toggle collapsed" data-toggle = "collapse" data-target = "#main-menu" aria-expanded = "false">
              <span className = "sr-only">Toggle navigation</span>
              <span className = "icon-bar"></span>
              <span className = "icon-bar"></span>
              <span className = "icon-bar"></span>
            </button>
          </div>
          <div className = "collapse navbar-collapse" id = "main-menu">
            <ul className = "nav navbar-nav">
              <li className = "btn-link" onClick={e => { this.toggleNightMode(e); return false }}> Night Mode </li>
              <li><Link to={`/about`}> About </Link></li>
              <li><Link to={`/calendar`}> Calendar </Link></li>
              <li><Link to={`/sggs`}> Sri Guru Granth Sahib </Link></li>
              <li><Link to={`/nitnem`}> Nitnem </Link></li>
            </ul>
            <form className = "navbar-form navbar-right form-inline">
              <input onChange = {(e) => this.updateFontSize(e)} id = "fontChanger" type = "range" name = "font-size" min = "1" max = "10" step = "0.1"/>
            </form>
          </div>
        </div>
      </nav>
    );
  }
}

module.exports = Nav;
