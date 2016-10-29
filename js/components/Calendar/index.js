import React, { Component } from 'react';
import ReactMarkdown from 'react-remarkable';

import { loading } from '../../constants';

import Toolbar from '../Toolbar';

export default class Calendar extends Component {
  constructor (props) {
    super (props);
    this.state = { file: loading };
    fetch(`docs/md/calendar.md`).then(r => r.text()).then(file => this.setState({ file }));
  }
  render () {
    return (
      <div>
        <Toolbar title="Sikh Calendar" />
        <div style={{ padding: 10, textAlign: 'left' }}>
          <ReactMarkdown source={this.state.file} />
        </div>
      </div>
    );
  }
}
