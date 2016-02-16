import React, { Component } from 'react';
import ReactMarkdown from 'react-remarkable';
import { baanies } from '../../constants';

export default class Baani extends Component {
  constructor (props) {
    super (props);
    this.state = { file: "" };
    fetch(`docs/${this.props.params.baani}.md`).then(r => r.text()).then(file => this.setState({ file }));
  }
  render () {
    return (<div className="gurbani-text">
      <ReactMarkdown container={({ children }) => <div className="gurbani-text">{children}</div>} source={this.state.file} />
    </div>);
  }
}
