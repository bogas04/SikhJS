import React, { Component } from 'react';
import ReactMarkdown from 'react-remarkable';

export default class Calendar extends Component {
  constructor (props) {
    super (props);
    this.state = { file: "" };
    fetch(`docs/calendar.md`).then(r => r.text()).then(file => this.setState({ file }));
  }
  render () {
    return <ReactMarkdown source={this.state.file} />;
  }
}
