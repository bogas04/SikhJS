const React = require('react');
const Component = React.Component;

class Baanies extends Component {
  render () {
    let baanies = require('../baanies').map(e => <li className = "list-group-item" key = {e}><Link to = {`/nitnem/${e}`}> {e} </Link></li>);
    return (
      <div>
        <h1> Nitnem </h1>
        <ul className = "list-group">
          {baanies}
        </ul>
      </div>
    );
  }
}

module.exports = Baanies;
