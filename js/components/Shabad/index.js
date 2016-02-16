import React, { Component } from 'react';

export default class Shabad extends Component {
  constructor (props) {
    super (props);
    //this.database = JSON.parse(require('fs').readFileSync(__dirname + '/../../../docs/keertan.json', 'utf8'));
    //this.shabad = this.database.find(e => e.title === this.props.params.shabad);
    this.shabad = null;
  }
  render () {
    return (
      <div style = {{height: '100%'}}>
        <h3> This feature requires internet connection </h3>
        <webview src = {this.shabad.url + '/print_view'} style = {{width: '100%'}} />
      </div>
    );
  }
}
