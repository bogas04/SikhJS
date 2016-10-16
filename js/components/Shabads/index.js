import React, { Component } from 'react';
import { Link } from 'react-router';
import { Throttle } from 'react-throttle';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import TextField from 'material-ui/TextField';

const maxResults = 300;

export default class Shabads extends Component {
  constructor (props) {
    super (props);
    this.database = [];
    this.state = { keyword: "" };
  }
  componentWillMount() {
    fetch('docs/json/keertan.json').then(r => r.json()).then(db => this.database = db);
  }
  search(keyword) {
    this.setState({ keyword });
  }
  filteredResults () {
    let { keyword } = this.state;
    return (keyword !== ""
      ? this.database.filter(e => e.title.toLowerCase().includes(keyword.toLowerCase()) || e.ang === keyword)
      : this.database
    ).slice(0, maxResults);
  }
  render () {
    let results = this.filteredResults().map(e => (
      <tr key = {e.url} >
        <td><Link to = {`/shabads/${e.title}`}> {e.title} </Link></td>
        <td>{e.ang}</td>
      </tr>
    ));
    return (
      <div>
        <Toolbar className='toolbar'>
          <ToolbarGroup firstChild={true}>
            <ToolbarTitle className='toolbar-title' text="Shabad Searcher" />
          </ToolbarGroup>
          <ToolbarGroup>
            <Throttle handler="onChange" time="200">
              <TextField
                hintText = "Search shabads from Amrit Keertan"
                onChange = {e => this.search(e.currentTarget.value)}
              />
            </Throttle>
          </ToolbarGroup>
          <ToolbarGroup>
            <ToolbarTitle text={`Showing ${results.length} Shabad Results`} />
          </ToolbarGroup>
        </Toolbar>

        <div style = {{ padding: '25px' }}>
          <div style = {{ maxHeight: '84vh', overflow: 'auto' }}>
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
      </div>
    );
  }
}
