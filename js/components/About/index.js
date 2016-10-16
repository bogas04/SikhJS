import React, { Component } from 'react';
import ReactMarkdown from 'react-remarkable';
import { loading } from '../../constants';

export default class About extends Component {
  constructor (props) {
    super (props);
    this.state = { file: loading };
    fetch('README.md').then(r => r.text()).then(file => this.setState({ file }));
  }
  render () {
    return (
      <div style={{ padding: 10 }}>
        <ReactMarkdown source={this.state.file} />
      </div>
    );
  }
}
