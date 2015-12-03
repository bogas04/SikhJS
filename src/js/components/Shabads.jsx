const React = require('react');
const Component = React.Component;
const maxResults = 300;

class Shabads extends Component {
  constructor (props) {
    super (props);
    this.database = JSON.parse(require('fs').readFileSync(__dirname + '/../../../docs/keertan.json', 'utf8'));
    this.state = { keyword: "" };
  }
  search (keyword) {
    this.setState({ keyword });
  }
  filteredResults () {
    let keyword = this.state.keyword;
    return (keyword !== "" ? this.database.filter(e => e.title.toLowerCase().includes(keyword.toLowerCase())) : this.database).slice(0, maxResults);
  }
  render () {
    let results = this.filteredResults().map(e => <tr key = {e.url} ><td><Link to = {`/shabads/${e.title}`}> {e.title} </Link></td><td>{e.ang}</td></tr>);
    return (
      <div>
        <div className = "form-group form-inline">
          <input 
            className = "form-control"
            style = {{width: '70%'}}
            placeholder = "Search shabads from Amrit Keertan"
            onChange = { (e) => this.search(e.currentTarget.value) }
          />
          <small> Showing {results.length} Shabad Results </small>
        </div>
        <div style = {{maxHeight: '84vh', overflow: 'auto'}}>
          <table className = "table table-bordered">
            <thead>
              <tr><th>Shabad</th><th>Ang</th></tr>
            </thead>
            <tbody>
              {results}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

module.exports = Shabads;
