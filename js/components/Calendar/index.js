import React, { Component } from 'react';
import ReactMarkdown from 'react-remarkable';
import { loading } from '../../constants';

export default class Calendar extends Component {
  constructor (props) {
    super (props);
    this.state = { file: loading };
    fetch(`docs/md/calendar.md`).then(r => r.text()).then(file => this.setState({ file }));
  }
  render () {
    return (
      <div>
        <h2>Sikh Calendar</h2>
        <ReactMarkdown source={this.state.file} />
      </div>
    );
  }
}
