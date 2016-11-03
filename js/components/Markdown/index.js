import React, { Component } from 'react';
import ReactMarkdown from 'react-remarkable';
import Loader from '../Loader';

export default class Markdown extends Component {
  constructor (props) {
    super (props);
    this.state = { file: '', loading: true };
    fetch(this.props.url).then(r => r.text()).then(file => this.setState({ file, loading: false }));
  }
  render () {
    const { style = {}, className = '' } = this.props;
    const { loading, file } = this.state;
    return (
      <Loader loading={loading}>
        <div style={{ padding: 10, ...style}} className={className}>
          <ReactMarkdown source={file} />
        </div>
      </Loader>
    );
  }
}
